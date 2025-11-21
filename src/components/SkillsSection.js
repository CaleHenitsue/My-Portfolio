import SkillLogo from "./SkillLogo";

const SkillsSection = ({ config }) => {
  const technicalSkills = [
    {
      name: "React",
      imgSrc: "https://cdn.simpleicons.org/react/61DAFB",
      url: "https://react.dev",
    },
    {
      name: "JavaScript",
      imgSrc: "https://cdn.simpleicons.org/javascript/F7DF1E",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Tailwind",
      imgSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      url: "https://tailwindcss.com",
    },
    {
      name: "Python",
      imgSrc: "https://cdn.simpleicons.org/python/3776AB",
      url: "https://www.python.org",
    },
    {
      name: "Git",
      imgSrc: "https://cdn.simpleicons.org/git/F05032",
      url: "https://git-scm.com",
    },
    {
      name: "Figma",
      imgSrc: "https://cdn.simpleicons.org/figma/F24E1E",
      url: "https://www.figma.com",
    },
    {
      name: "Firebase",
      imgSrc: "https://cdn.simpleicons.org/firebase/FFCA28",
      url: "https://firebase.google.com",
    },
    {
      name: "PHP",
      imgSrc: "https://cdn.simpleicons.org/php/777BB4",
      url: "https://www.php.net",
    },
    {
      name: "MERN Stack",
      imgSrc: "https://cdn.simpleicons.org/mongodb/47A248",
      url: "https://www.mongodb.com/mern-stack",
    },
  ];

  const personalSkills = [
    {
      title: "Creative Problem Solving",
      description: "Finding innovative solutions through creative thinking",
      gradient: "from-green-400 to-emerald-500",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Empathy",
      description: "Understanding user needs and emotions",
      gradient: "from-pink-400 to-rose-500",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Curiosity",
      description: "Always learning and exploring",
      gradient: "from-purple-400 to-indigo-500",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Patience",
      description: "Thoughtful and deliberate approach",
      gradient: "from-blue-400 to-cyan-500",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className="text-5xl font-light mb-16 text-center gradient-text"
          style={{
            fontFamily: config.font_family,
            fontSize: `${config.font_size * 3}px`,
          }}
        >
          {config.skills_title}
        </h2>

        {/* Technical Arsenal */}
        <div className="mb-16">
          <h3
            className="text-3xl font-semibold mb-12 text-center text-primary"
            style={{
              fontFamily: config.font_family,
              fontSize: `${config.font_size * 1.5}px`,
            }}
          >
            Technical Arsenal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technicalSkills.map((skill, i) => (
              <SkillLogo
                key={i}
                name={skill.name}
                imgSrc={skill.imgSrc}
                url={skill.url}
              />
            ))}
          </div>
        </div>

        {/* Personal Qualities */}
        <div>
          <h3
            className="text-3xl font-semibold mb-12 text-center text-primary"
            style={{
              fontFamily: config.font_family,
              fontSize: `${config.font_size * 1.5}px`,
            }}
          >
            Personal Qualities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalSkills.map((skill, i) => (
              <div
                key={i}
                className="text-center p-6 bg-surface rounded-2xl shadow-lg border border-custom card-hover"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center`}
                >
                  {skill.icon}
                </div>
                <h4
                  className="text-lg font-semibold mb-2 text-primary"
                  style={{ fontSize: `${config.font_size * 1.125}px` }}
                >
                  {skill.title}
                </h4>
                <p
                  className="text-sm text-secondary"
                  style={{ fontSize: `${config.font_size * 0.875}px` }}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
