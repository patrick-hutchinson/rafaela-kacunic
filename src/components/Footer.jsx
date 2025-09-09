import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>All rights reserved.</div>
      <Link href="/legal">
        <div style={{ textAlign: "center" }}>
          PRIVACY & <br />
          IMPRINT
        </div>
      </Link>
      <div>{year} Rafaela Kaćunić</div>
    </footer>
  );
};

export default Footer;
