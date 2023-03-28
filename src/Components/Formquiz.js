import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Formquiz.css";

const Formquiz = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_cuxr66q",
        "template_fmzucuf",
        form.current,
        "RPuF6U-fByQXofcef"
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4000);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='success'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4000);
        }
      );
  };

  return (
    <div>

      <h2 className="avj">À vous de jouer !</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <p className="quizm">
          Pour que l'ambiance de la soirée soit à son paroxisme, nous
          souhaiterions que vous participiez à l'élaboration de notre playlist
          de mariage. Rien de plus simple, completez les 3 choix ci-dessous et
          envoyez les nous
        </p>

        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          placeholder="Prénom"
          className="input"
        />
        <input
          type="text"
          name="choice1"
          required
          autoComplete="off"
          placeholder="🎶 Choix n°1"
          className="input"
        />
        <input
          type="text"
          name="choice2"
          autoComplete="off"
          placeholder="🎶 Choix n°2"
          className="input"
        />
        <input
          type="text"
          name="choice3"
          autoComplete="off"
          placeholder="🎶 Choix n°3"
          className="input"
        />
      <div className="form-message"></div>
        <input type="submit" value="Envoyer" className="btn" />
      </form>
    </div>
  );
};

export default Formquiz;
