import profilePic from "../assets/profile.png"; // Add this line

const HeroSection = ({ config }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="float mb-8">
          <img
            src={profilePic}
            alt={`${config.hero_name}'s profile`}
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
        <h1
          className="text-6xl md:text-7xl font-light mb-6 fade-in-up text-primary"
          style={{
            fontFamily: config.font_family,
            fontSize: `${config.font_size * 3.75}px`,
          }}
        >
          {config.hero_name}
        </h1>
        <p
          className="text-xl md:text-2xl text-secondary mb-12 fade-in-up"
          style={{
            animationDelay: "0.2s",
            fontSize: `${config.font_size * 1.25}px`,
          }}
        >
          {config.hero_tagline}
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-4 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 fade-in-up"
          style={{
            animationDelay: "0.4s",
            background: `linear-gradient(to right, ${config.primary_action_color}, ${config.secondary_action_color})`,
          }}
        >
          Explore My Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
