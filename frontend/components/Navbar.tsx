export default function Navbar() {
  return (
    <nav
      className="
        fixed
        z-50

        /* Mobile */
        bottom-0
        left-0
        right-0
        h-16
        w-full

        /* Desktop */
        md:right-0
        md:top-0
        md:bottom-auto
        md:left-auto
        md:h-screen
        md:w-44

        flex
        flex-row
        items-center
        justify-center

        md:flex-col

        bg-[#6B3515]
        bg-[url('/Brown-Texture.avif')]
        bg-cover
        bg-center
        text-white
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-around

          md:h-full
          md:w-auto
          md:flex-col
          md:justify-center
          md:gap-16
        "
      >
        <a
          href="#about"
          className="text-sm transition-opacity hover:opacity-70 md:text-lg"
        >
          About
        </a>

        <a
          href="#skills"
          className="text-sm transition-opacity hover:opacity-70 md:text-lg"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="text-sm transition-opacity hover:opacity-70 md:text-lg"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-sm transition-opacity hover:opacity-70 md:text-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}