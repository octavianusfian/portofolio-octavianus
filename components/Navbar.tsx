import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-9 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Image alt="avatar" src={"/avatar.png"} width={100} height={100} />
          <span className="text-2xl font-semibold text-[#AEFEFF]">
            Octavianus.dev
          </span>
        </div>
        <div className="text-white font-semibold">
          <Link href={"#projects"} className="opacity-80">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
