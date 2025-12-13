const Contact = require('../models/contact');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
    try {
        // 1. Destructure data from request body
        const { name, email, phone, message, service, source } = req.body;

        // 2. Validation (Name, Email, Message are mandatory)
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please fill in all required fields." });
        }

        // 3. Create new contact entry in MongoDB
        const newContact = await Contact.create({
            name,
            email,
            phone: phone || "Not Provided",
            service: service || "Not Selected",
            message,
            source: source || "General"
        });

        // 4. Configure Nodemailer
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER, // Sender: mediafactory.enquiries@gmail.com
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: `Media Factory Website <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_TO || 'support@mediafactory.co.in', // Receiver
                replyTo: email, // Reply to the customer
                subject: `New Lead from ${source || 'Website'}: ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                        <h2 style="color: #d32f2f;">New Inquiry Received</h2>
                        <p>You have received a new message from the <strong>${source || 'Website'}</strong>.</p>
                        
                        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px;"><strong>Name:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not Provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid #eee;">${service || 'Not Selected'}</td>
                            </tr>
                        </table>
                        
                        <p style="margin-top: 20px;"><strong>Message:</strong></p>
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #d32f2f;">${message}</div>
                    </div>
                `
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(201).json({ message: "Message sent successfully!", contact: newContact });

    } catch (error) {
        console.error("Error in submitContactForm:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { submitContactForm };