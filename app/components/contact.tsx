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
      className="contact min-h-screen w-screen flex flex-col items-center"
    >
      <h2 className="font-title text-center mb-10">Mon contact</h2>
      <form
        onSubmit={handleSubmit}
        className="contact-form flex flex-col gap-5 m-10"
      >
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className="glitch-form font-basic">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="border-[#b300ff] border-2 h-10 font-basic bg-transparent champs"
            onChange={handleChange}
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
            className="border-[#b300ff] border-2 h-10 font-basic bg-transparent champs"
            onChange={handleChange}
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
            className="border-[#b300ff] border-2 bg-transparent champs"
            style={{ resize: "none" }}
            onChange={handleChange}
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
