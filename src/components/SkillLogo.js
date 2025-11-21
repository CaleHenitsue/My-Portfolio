const SkillLogo = ({ name, imgSrc, url }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-28 h-28 mb-4 p-6 bg-surface rounded-2xl shadow-lg border border-custom transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:border-accent-primary flex items-center justify-center"
      >
        <img src={imgSrc} alt={name} className="w-full h-full object-contain" />
      </a>
      <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  );
};

export default SkillLogo;
