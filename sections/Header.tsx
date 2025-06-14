import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className=" container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <Link href="/">
              <span className="text-xl font-bold uppercase">
                Nicholas Ndereba
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className=" size-11 border border-stone-400 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <button
              className="hidden md:inline-flex btn-red-orange text-white
             h-11 px-6 rounded-lg border border-red-orange uppercase  cursor-pointer items-center "
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
