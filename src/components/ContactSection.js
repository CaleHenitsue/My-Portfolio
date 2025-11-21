import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = ({ config }) => {
  const [formMessage, setFormMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  // TODO: Replace with your real keys from EmailJS dashboard
  const SERVICE_ID = "service_kzy3578";
  const TEMPLATE_ID = "template_7fqwtkh";
  const PUBLIC_KEY = "FejPAQxVARjHqrvES";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        setFormMessage(
          "Thank you! Your message has been sent. I'll reply soon."
        );
        setShowMessage(true);
        form.current.reset();
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        setFormMessage(
          "Oops! Something went wrong. Please try again or email me directly."
        );
        setShowMessage(true);
      }
    );

    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2
          className="text-5xl font-light mb-12 gradient-text"
          style={{
            fontFamily: config.font_family,
            fontSize: `${config.font_size * 3}px`,
          }}
        >
          {config.contact_title}
        </h2>
        <p
          className="text-xl text-secondary mb-12"
          style={{ fontSize: `${config.font_size * 1.25}px` }}
        >
          Whether you want to collaborate on a project, discuss ideas, or simply
          say hello — I'd love to hear from you.
        </p>
        <div className="bg-surface rounded-3xl shadow-xl p-12 border border-custom">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-left text-primary mb-2 font-medium"
                style={{ fontSize: `${config.font_size}px` }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                pattern=".{3,}"
                title="Name must be at least 3 characters"
                className="w-full px-4 py-3 rounded-xl border border-custom bg-surface text-primary focus:outline-none focus:ring-2 transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-left text-primary mb-2 font-medium"
                style={{ fontSize: `${config.font_size}px` }}
              >
                Your Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-xl border border-custom bg-surface text-primary focus:outline-none focus:ring-2 transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-primary mb-2 font-medium"
                style={{ fontSize: `${config.font_size}px` }}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                pattern=".{10,}"
                title="Message must be at least 10 characters"
                className="w-full px-4 py-3 rounded-xl border border-custom bg-surface text-primary focus:outline-none focus:ring-2 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
              style={{
                background: `linear-gradient(to right, ${config.primary_action_color}, ${config.secondary_action_color})`,
              }}
            >
              Send Message
            </button>
          </form>
          {showMessage && (
            <div
              className="mt-6 text-center font-medium"
              style={{ color: "var(--accent-primary)" }}
            >
              {formMessage}
            </div>
          )}
          <div className="mt-8 pt-8 border-t border-custom">
            <p
              className="text-secondary mb-4"
              style={{ fontSize: `${config.font_size}px` }}
            >
              Or reach me directly at:
            </p>
            <a
              href="mailto:ali@example.com"
              className="text-lg font-medium transition-colors hover:text-primary"
              style={{
                color: "var(--accent-primary)",
                fontSize: `${config.font_size * 1.125}px`,
              }}
            >
              kyawzaya3578@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
