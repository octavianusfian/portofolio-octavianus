import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title="About Me" />
      <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
        {/* Left: background + problems I like */}
        <div className="space-y-6">
          <div>
            <p className="text-base leading-relaxed">
              I&apos;m a front-end developer who enjoys turning ideas into
              usable interfaces. Most of my work revolves around building
              dashboards, e-commerce features, and internal tools using React
              and Next.js. I like working close to the product and improving the
              experience step by step.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Problems I Enjoy Working On
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Turning complex flows into simple, easy-to-follow user
                interfaces.
              </li>
              <li>
                Building reusable components and clean front-end architecture.
              </li>
              <li>
                Connecting front-end with APIs, handling data, and keeping UI in
                sync with the backend.
              </li>
              <li>
                Improving performance and UX on data-heavy pages like tables and
                forms.
              </li>
            </ul>
          </div>
        </div>
        {/* Right: tech stack + CV */}

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 backdrop-blur-md shadow-inner">
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Frontend:</span> React, Next.js,
                Tailwind CSS, Shadcn UI
              </p>
              <p>
                <span className="font-medium">Backend / DB:</span> Prisma,
                Supabase
              </p>
              <p>
                <span className="font-medium">Others:</span> Git, REST API
                integration, Figma
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 backdrop-blur-md shadow-inner flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-semibold">Curriculum Vitae</h3>
              <p className="text-sm opacity-80">
                For more details about my experience, projects, and
                responsibilities, you can view my full CV.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-[#AEFEFF] text-black shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
