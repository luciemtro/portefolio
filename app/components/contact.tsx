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
    <section
      id="contact"
      className="contact min-h-screen w-screen flex flex-col items-center p-5"
    >
      <h2 className="font-title text-center py-10">Mon contact</h2>
      <form
        onSubmit={handleSubmit}
        className="contact-form flex flex-col gap-5"
      >
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className="glitch-form font-basic">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className=" h-10 font-basic champs"
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="glitch-form font-basic">
            Email :
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className=" h-10 font-basic champs"
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="glitch-form font-basic">
            Message :
          </label>
          <textarea
            rows={10}
            name="message"
            value={formData.message}
            className=" champs"
            style={{ resize: "none" }}
            onChange={handleChange}
            placeholder="Votre message"
            required
          />
        </div>
        <button
          type="submit"
          className="font-basic button puce--violet scale uppercase"
        >
          Envoyer
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}
