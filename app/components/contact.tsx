"use client";
import { useState } from "react";
import emailjs from "emailjs-com"; // Assurez-vous d'installer emailjs-com avec `npm install emailjs-com`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Envoie l'email avec EmailJS
    emailjs
      .send(
        "service_la7ma1o",
        "template_rfdvx2u",
        formData,
        "wpWb_IHFyUQYcRXow"
      )
      .then((response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
        setSuccessMessage("Message envoyé avec succès !");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log("Échec de l'envoi de l'email.", error);
        setErrorMessage("Une erreur est survenue, veuillez réessayer.");
        setSuccessMessage("");
      });

    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact h-screen w-screen">
      <h2 className="font-title text-center">Mon contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}
