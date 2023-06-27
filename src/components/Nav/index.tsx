import Link from "next/link";

const Nav = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link href="/">Static Site Rendering</Link>
      <Link href="/csr">Client Side Data Fetching</Link>
      <Link href="/isr">Incremental Static Regeneration</Link>
      <Link href="/ssr">Server Side Rendering</Link>
    </div>
  );
};

export default Nav;
