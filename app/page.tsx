import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-10 px-6 space-y-20">
        {/* HERO SECTION */}
        <section className="flex ">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#033d3b] text-3xl font-semibold">
              Hello, i’m Octavianus Fian
            </h2>
            <h2 className="mt-9 text-white text-4xl font-semibold leading-normal">
              React & Next.js Developer
            </h2>
            <p className="mt-4">
              I am a front-end developer with 2 years experience using React.js,
              currently expanding into fullstack development with Next.js,
              Prisma, and Supabase. I enjoy building clean UI, efficient data
              flows, and fullstack features end-to-end.
            </p>
            <div className="flex mt-4 items-center  gap-4">
              <a
                href="https://wa.me/+6281315378077"
                className="px-4 py-2 rounded bg-[#AEFEFF] text-black shadow"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/octavianusfian"
                className="underline opacity-80"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/octavianusfian"
                className="underline opacity-80"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <Image
              alt="picture"
              className="ml-50 w-[300px]"
              src={"/picture-2.png"}
              width={200}
              height={200}
            />
          </div>
        </section>
        {/* ABOUT SECTION */}
        <AboutSection />

        {/* PROJECT SECTION */}
        <section id="projects">
          <SectionTitle title="Projects" />
          <div className="space-y-10">
            <ProjectCard
              title="Prostore (E-Commerce Website)"
              description="Prostore is a digital marketplace where creators can sell e-books, designs, and other digital assets. It offers a smooth shopping experience with authentication, checkout, reviews, and secure Stripe payments."
              images={[
                "/Prostore/dashboard.png",
                "/Prostore/detail_product.png",
                "/Prostore/home.png",
              ]}
              link="https://prostore-rho-brown.vercel.app/"
              repo="https://github.com/octavianusfian/prostore"
            />
            <ProjectCard
              title="Job Tracker"
              description="JobTracker is a tool designed to help users stay organized during their job search. It lets you log applications, update statuses, filter by criteria, and view progress through a clean dashboard."
              images={[
                "/Jobtrack/jobtrack_1.png",
                "/Jobtrack/jobtrack_2.png",
                "/Jobtrack/jobtrack_3.png",
              ]}
              link="https://job-tracker-flax-sigma.vercel.app/"
              repo="https://github.com/octavianusfian/job-tracker"
            />
            <ProjectCard
              title="Github's Api"
              description="I built Search GitHub User as an experiment that turned into a great learning project. The app lets users search GitHub profiles, save favorites, and view follower/repo data through charts while helping me improve my API and UI/UX skills."
              images={["/githubapi/github_1.jpeg", "/githubapi/github_2.jpeg"]}
              link="https://search-github-users-fn.netlify.app/"
              repo="https://github.com/octavianusfian/react-search-github-user"
            />
          </div>
        </section>
        {/* SKILL SECTION */}
        <section id="skills">
          <SectionTitle title="Skills" />
          <div className="flex flex-wrap gap-3 mt-6 p-6 bg-linear-to-b rounded-2xl shadow-inner from-[#AEFEFF] to-[#4FBDBA] ">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Prisma",
              "Supabase",
              "Tailwind CSS",
              "Git",
              "REST API",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 font-medium border rounded-xl text-sm text-black bg-white/40 backdrop-blur-md  shadow transition-all border-white/30 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER SECTION */}
        <Footer />
      </main>
    </>
  );
}
