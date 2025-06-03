"use client";

const links = [
  { name: "home", path: "home" },
  { name: "resume", path: "resume" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = () => {
  return (
    <section
      className="h-full"
      style={{
        transform: "scale(0.9)",
        transformOrigin: "top center",
      }}
    >
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(link.path)}
          className="capitalize font-medium hover:text-accent transition-all"
        >
          {link.name}
        </button>
      ))}
    </nav>
    </section>
  );
};

export default Nav;
