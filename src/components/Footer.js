import { useState, useEffect } from "react";

const Footer = ({ config }) => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [key, setKey] = useState(0); // Force re-render for clean animation

  const literaryQuotes = [
    {
      text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
      author: "Antoine de Saint-Exupéry, The Little Prince",
    },
    {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo, Les Misérables",
    },
    {
      text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
      author: "Fyodor Dostoevsky, The Brothers Karamazov",
    },
    {
      text: "All grown-ups were once children... but only few of them remember it.",
      author: "Antoine de Saint-Exupéry, The Little Prince",
    },
    {
      text: "To love another person is to see the face of God.",
      author: "Victor Hugo, Les Misérables",
    },
    {
      text: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him.",
      author: "Fyodor Dostoevsky, The Brothers Karamazov",
    },
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * literaryQuotes.length);
    const selected = literaryQuotes[randomIndex];
    setCurrentQuote(selected.text);
    setCurrentAuthor(selected.author);
    setKey((prev) => prev + 1); // Trigger fresh animation
  };

  useEffect(() => {
    getRandomQuote();
    const interval = setInterval(getRandomQuote, 10000); // 20 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 px-6 border-t border-custom bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="mb-8 cursor-pointer select-none"
          onClick={getRandomQuote}
          title="Click for another quote"
        >
          <div key={key} className="quote-container">
            <p
              className="text-xl md:text-2xl text-secondary italic mb-3 leading-relaxed px-4"
              style={{
                fontSize: `${config.font_size * 1.35}px`,
                fontFamily: config.font_family,
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              “{currentQuote}”
            </p>
            <p
              className="text-sm md:text-base font-medium gradient-text"
              style={{ fontSize: `${config.font_size * 0.95}px` }}
            >
              — {currentAuthor}
            </p>
          </div>
        </div>
        <p
          className="text-secondary text-sm"
          style={{ fontSize: `${config.font_size * 0.875}px` }}
        >
          © 2025 Ali. Crafted with care and curiosity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
