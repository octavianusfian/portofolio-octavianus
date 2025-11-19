import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  images,
  link,
  repo,
}: {
  title: string;
  description: string;
  images: string[];
  link: string;
  repo: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/30 backdrop-blur-xl hover:shadow-2xl shadow-lg bg-linear-to-b from-[#AEFEFF] to-[#4FBDBA] text-black hover:-translate-y-1   duration-300 transition-all ">
      <div className="px-5 pt-5 flex gap-3 w-full ">
        {images.map((img) => (
          <Image
            key={img}
            src={img}
            alt={title}
            width={200}
            height={200}
            className="object-cover w-full rounded-xl shadow"
          />
        ))}
      </div>
      <div className="p-6 space-y-3">
        <Link href={link}>
          <h3 className="font-semibold text-xl tracking-wide text-gray-900 mb-4">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-700/90">{description}</p>

        <div className="flex gap-4 text-sm pt-3">
          <a
            href={link}
            className="text-teal-700 font-medium hover:underline hover:text-teal-900 transition"
          >
            Live Demo
          </a>
          <a
            href={repo}
            className="text-gray-700 hover:text-black opacity-80 hover:underline transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
