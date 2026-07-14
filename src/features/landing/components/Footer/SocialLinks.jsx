const SocialLinks = ({ links }) => {
  return (
    <div className="flex gap-4">

      {links.map((item, index) => {

        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.href}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-slate-800
              text-slate-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-600
              hover:text-white
            "
          >
            <Icon size={20} />
          </a>
        );

      })}

    </div>
  );
};

export default SocialLinks;