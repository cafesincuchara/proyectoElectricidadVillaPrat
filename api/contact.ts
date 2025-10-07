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

  // Configuración del transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Opciones del correo con HTML
  const mailOptions = {
    from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `📩 Nuevo mensaje de ${name}`,
    html: `
      <div style="
        border: 2px solid #4F46E5;
        border-radius: 12px;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #F3F4F6;
      ">
        <h2 style="color: #4F46E5; margin-bottom: 15px;">Nuevo mensaje del formulario web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="margin-left: 10px;">${message}</p>
        <hr style="margin: 20px 0; border-color: #ddd;">
        <p style="font-size: 12px; color: #555;">Este mensaje fue enviado desde el formulario de contacto de tu web.</p>
      </div>
    `,
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
