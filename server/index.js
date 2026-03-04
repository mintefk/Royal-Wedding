import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: ["http://localhost:5173"], methods: ["POST"] }));
app.use(express.json());

app.post("/api/rsvp", async (req, res) => {
  try {
    const { fullName, phone, attendance, guests, message } = req.body || {};

    if (!fullName || !phone || !attendance || !guests) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const groomEmail = process.env.GROOM_EMAIL;

    await transporter.sendMail({
      from: `"Wedding RSVP" <${process.env.SMTP_USER}>`,
      to: groomEmail,
      subject: `New RSVP from ${fullName}`,
      text: [
        `Full Name: ${fullName}`,
        `Phone: ${phone}`,
        `Attendance: ${attendance === "yes" ? "Will attend" : "Cannot attend"}`,
        `Number of guests: ${guests}`,
        `Message: ${message || "(none)"}`,
      ].join("\n"),
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("RSVP email error:", err);
    res.status(500).json({ ok: false, error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`RSVP server listening on http://localhost:${PORT}`);
});

