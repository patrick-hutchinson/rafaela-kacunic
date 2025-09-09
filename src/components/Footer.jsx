import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>All rights reserved.</div>
      <Link href="/legal">PRIVACY & IMPRINT</Link>
      <div>{year} Rafaela Kaćunić</div>
    </footer>
  );
};

export default Footer;
