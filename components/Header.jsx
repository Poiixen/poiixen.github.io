import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
  <header className="py-8 xl:py-12 text-white bg-pink-50/20">
    <div className="comtainer mx-auto">
      {}
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Tito <span className="text-accent">.</span>
        </h1>
      </Link>
      {}
      <Nav/>
    </div>
  </header>
  );
};

export default Header
