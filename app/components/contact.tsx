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
        className="contact-form flex flex-col gap-5 bg-white p-5 rounded-lg"
      >
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className="text-black font-basic">
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="border-black border-2 h-10 rounded-md font-basic"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-black font-basic">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="border-black border-2 h-10 rounded-md font-basic"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-black font-basic">
            Message
          </label>
          <textarea
            rows={10}
            name="message"
            value={formData.message}
            className="border-black border-2 rounded-md "
            style={{ resize: "none" }}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="font-basic">
          Envoyer
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}
