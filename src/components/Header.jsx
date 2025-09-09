import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ showInfo, currentIndex, image_count, onInfoClick }) => {
  const pathname = usePathname();

  const ProjectOptions = () => (
    <>
      <div>
        <button onClick={onInfoClick}>{showInfo ? "CLOSE" : "INFO"}</button>
      </div>
      <div>{`${currentIndex + 1} / ${image_count}`}</div>
    </>
  );

  return (
    <header>
      {pathname.includes("projects") && <ProjectOptions />}
      <Link href="/" className="back_button">
        BACK
      </Link>
    </header>
  );
};

export default Header;
