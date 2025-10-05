// api/contact.ts
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No proporcionado"}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true, message: "Mensaje enviado correctamente" });
  } catch (error: any) {
    console.error("Error al enviar email:", error);
    res.status(500).json({
      error: "No se pudo enviar el mensaje",
      details: error.message,
    });
  }
}
