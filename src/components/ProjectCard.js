const ProjectCard = ({ title, description, gradient, icon }) => {
  return (
    <div className="bg-surface rounded-2xl shadow-lg overflow-hidden card-hover border border-custom">
      <div className={`h-48 ${gradient} flex items-center justify-center`}>
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <div className="flex gap-3">
          <button
            className="hover:text-primary transition-colors text-sm font-medium"
            style={{ color: "var(--accent-primary)" }}
            onClick={() =>
              window.open(
                "https://github.com/CaleHenitsue/CaleHenitsue",
                "_blank"
              )
            }
          >
            GitHub
          </button>
          <button
            className="hover:text-primary transition-colors text-sm font-medium"
            style={{ color: "var(--accent-primary)" }}
            onClick={() =>
              window.open("https://myexpensetracker2025.netlify.app/", "_blank")
            }
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
