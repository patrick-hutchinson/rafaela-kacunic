import Link from "next/link";
import AnimationLink from "./AnimationLink";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>All rights reserved.</div>
      <AnimationLink path="/legal">
        <div style={{ textAlign: "center" }}>
          PRIVACY & <br />
          IMPRINT
        </div>
      </AnimationLink>
      <div>{year} Rafaela Kaćunić</div>
    </footer>
  );
};

export default Footer;
