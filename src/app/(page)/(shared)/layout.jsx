import Link from "next/link";

export default function SharedLayout({ children }) {
  return (
    <div className="shared_layout">
      <header style={{ zIndex: 2 }}>
        <Link href="/">BACK</Link>
      </header>
      {children}
    </div>
  );
}
