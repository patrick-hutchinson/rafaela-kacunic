import Link from "next/link";

export default function SharedLayout({ children }) {
  return (
    <div className="shared_layout">
      <header style={{ zIndex: 2 }}>
        <Link href="/">BACK</Link>
      </header>
      <div>
        <div
          className="nameplate"
          style={{
            pointerEvents: "none",
            width: "100%",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            position: "fixed",
            top: "var(--margin)",
          }}
        >
          <Link
            href="/"
            className="nameplate_inner"
            style={{
              position: "relative",
              display: "inline-block",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div className="nameplate_text" style={{ opacity: "0" }}>
              RAFAELA
            </div>
            <img
              className="nameplate_icon"
              src="/assets/images/nameplate-icon.png"
              alt="Nameplate"
              style={{ position: "absolute", width: "150%", height: "auto" }}
            />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
