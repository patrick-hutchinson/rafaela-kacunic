"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import AnimationLink from "./AnimationLink";

// import { Link } from "next-view-transitions";

const Header = ({ showInfo, currentIndex, image_count, onInfoClick }) => {
  const pathname = usePathname();

  const ProjectOptions = () => (
    <div className="project_header">
      <div>
        <button onClick={onInfoClick}>{showInfo ? "CLOSE" : "INFO"}</button>
      </div>
      <div>{`${currentIndex + 1} / ${image_count}`}</div>
    </div>
  );

  return (
    <header>
      {pathname.includes("projects") && <ProjectOptions />}
      <div className="back_button">
        <AnimationLink path="/">BACK</AnimationLink>
      </div>
    </header>
  );
};

export default Header;
