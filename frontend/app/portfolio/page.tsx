import Navbar from "@/components/Navbar";
import PageSlider from "@/components/PageSlider";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#023020] text-white">

      {/* =========================
          ANIMATED BACKGROUND
      ========================== */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animated-glow glow-one" />
        <div className="animated-glow glow-two" />
        <div className="animated-glow glow-three" />
      </div>

      {/* =========================
          RIGHT / MOBILE NAVBAR
      ========================== */}
      <Navbar />

      {/* =========================
          LEFT PAGE SLIDER
      ========================== */}
      <PageSlider />

      {/* =========================
          PROFILE IMAGE
      ========================== */}
      <ProfileImage />

      {/* =========================
          PAGE CONTAINER
      ========================== */}
      <div
        id="page-container"
        className="
          page-container
          relative
          z-10
          h-screen
          overflow-y-auto
          overflow-x-hidden
          scroll-smooth
          snap-y
          snap-mandatory
          md:pr-44
        "
      >

        {/* Waterfall video background - About page only */}
<video
  className="waterfall-bg"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/Waterfall-poster.jpg"
>
  <source src="/Waterfall.mp4" type="video/mp4" />
</video>
<div
  className="waterfall-overlay"
  aria-hidden="true"
/>
        {/* =========================
            ABOUT PAGE
        ========================== */}
        <section
          id="about"
          className="
            relative
            z-10
            flex
            min-h-screen
            snap-start
            items-center
            px-8
            py-20
            sm:px-12
            md:px-16
            lg:px-24
          "
        >
          <div className="mx-auto w-full max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              Portfolio
            </p>

            <h1
              className="
                heading-texture
                text-6xl
                leading-tight
                sm:text-8xl
              "
            >
              About Me
            </h1>

            <div className="mt-8 max-w-2xl">

              <p className="text-base leading-7 text-white/75 sm:text-lg">
                Hi, I&apos;m{" "}
                <span className="font-calligraphy text-3xl sm:text-4xl">
                  Tanuj
                </span>
                . I&apos;m a developer interested in building modern web
                applications, experimenting with technology, and solving
                real-world problems through software.
              </p>

              <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
                This portfolio is currently a work in progress. More projects,
                technical details, and information will be added soon.
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3
                  text-sm
                  transition-all
                  hover:bg-white
                  hover:text-[#023020]
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  transition-all
                  hover:bg-white/10
                "
              >
                Contact Me
              </a>

            </div>

          </div>
        </section>


        {/* =========================
            SKILLS PAGE
        ========================== */}
        <section
          id="skills"
          className="
            relative
            z-10
            flex
            min-h-screen
            snap-start
            items-center
            px-8
            py-20
            sm:px-12
            md:px-16
            lg:px-24
          "
        >
          <div className="mx-auto w-full max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              What I Use
            </p>

            <h2
              className="
                heading-texture
                text-6xl
                leading-tight
                sm:text-8xl
              "
            >
              Skills
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Skill 1 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Frontend
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Next.js, React, TypeScript, HTML, CSS and Tailwind CSS.
                </p>
              </div>


              {/* Skill 2 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Backend
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Python, FastAPI, REST APIs and backend application
                  development.
                </p>
              </div>


              {/* Skill 3 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Database
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  PostgreSQL, relational database design and data modelling.
                </p>
              </div>


              {/* Skill 4 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Tools
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Git, GitHub, VS Code and modern development workflows.
                </p>
              </div>


              {/* Skill 5 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Problem Solving
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Building practical solutions and learning new technologies
                  through projects.
                </p>
              </div>


              {/* Skill 6 */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <h3 className="text-xl font-semibold">
                  Learning
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Constantly exploring new technologies, frameworks and ideas.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =========================
            PROJECTS PAGE
        ========================== */}
        <section
          id="projects"
          className="
            relative
            z-10
            flex
            min-h-screen
            snap-start
            items-center
            px-8
            py-20
            sm:px-12
            md:px-16
            lg:px-24
          "
        >
          <div className="mx-auto w-full max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              Selected Work
            </p>

            <h2
              className="
                heading-texture
                text-6xl
                leading-tight
                sm:text-8xl
              "
            >
              Projects
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">

              {/* Project 1 */}
              <article
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Project 01
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      IQLRS
                    </h3>

                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    Hackathon
                  </span>

                </div>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  An interactive learning and quantum computing platform
                  designed to provide users with a software-based environment
                  for learning and experimentation.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                    Next.js
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                    FastAPI
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                    PostgreSQL
                  </span>

                </div>
              </article>


              {/* Project 2 */}
              <article
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Project 02
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Coming Soon
                    </h3>

                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    2026
                  </span>

                </div>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  Another project will be added here. This section can later
                  contain real project descriptions, screenshots, GitHub
                  links, technologies and live demos.
                </p>

                <div className="mt-6">

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                    In Development
                  </span>

                </div>
              </article>

            </div>
          </div>
        </section>


        {/* =========================
            CONTACT PAGE
        ========================== */}
        <section
          id="contact"
          className="
            relative
            z-10
            flex
            min-h-screen
            snap-start
            items-center
            px-8
            py-20
            sm:px-12
            md:px-16
            lg:px-24
          "
        >
          <div className="mx-auto w-full max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              Get In Touch
            </p>

            <h2
              className="
                heading-texture
                text-6xl
                leading-tight
                sm:text-8xl
              "
            >
              Contact
            </h2>

            <div className="mt-8 max-w-2xl">

              <p className="text-base leading-7 text-white/70 sm:text-lg">
                Have an idea, project, or opportunity? Feel free to get in
                touch. This section will later contain my actual contact
                information and social links.
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="mailto:piyush.rrr23@gmail.com"
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[#023020]
                  transition-all
                  hover:scale-105
                "
              >
                Send Email
              </a>

              <a
                href="#about"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3
                  text-sm
                  transition-all
                  hover:bg-white/10
                "
              >
                Back to About
              </a>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}