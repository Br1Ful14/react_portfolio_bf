import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inViewHandler } from "../animationHandler";
import emailjs from "emailjs-com";

export const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setEmailStatus("empty");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="contact" className="section bg-primary">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}
        >
          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            <form
              onSubmit={sendEmail}
              className="space-y-8 w-full max-w[780px]"
            >
              <div className="flex gap-8">
                <input
                  className="input"
                  type="text"
                  placeholder="votre nom"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="votre email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                className="input"
                type="text"
                placeholder="sujet"
                value={subject}
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="textarea"
                placeholder="votre message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="btn btn-lg bg-blue-700 hover:bg-blue-900">
                Envoyer
              </button>
            </form>
            <div className="flex flex-col">
              <h1 className="section-title text-5xl">Contact</h1>
              <p className="text-lg text-gray-200 mt-4 max-w-md">
              Que vous ayez une question, ou que vous souhaitiez simplement me contacter, envoyez-moi un message.
              </p>
            </div>
          </div>
          <div className="email-status mt-4">
            {emailStatus === "success" && (
              <p className="text-green-400">Email sent successfully</p>
            )}

            {emailStatus === "empty" && (
              <p className="text-yellow-400">Please fill in all the fields</p>
            )}
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
