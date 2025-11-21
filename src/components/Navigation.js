const Navigation = ({ config, isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-custom bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg text-primary">
          {config.hero_name}
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a
              href="#home"
              className="text-secondary hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-secondary hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-secondary hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="theme-toggle" onClick={toggleTheme}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
