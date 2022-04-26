import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="grid grid-cols-2 bg-zinc-900 text-white py-10 px-10">
      <div>
        <Link href="/">
          <a className="text-6xl">
            <h1>If Only She Knew...</h1>
          </a>
        </Link>
      </div>
      <div className="text-xl my-auto ml-auto">
        <nav>
          <ul className="flex">
            <li className="pr-4 opacity-60 ease-in duration-200 hover:opacity-100 ">
              <Link href="/">
                <a>
                  <p>Home</p>
                </a>
              </Link>
            </li>
            <li className="pr-4 opacity-60 ease-in duration-200 hover:opacity-100 ">
              <Link href="/photos">
                <a>
                  <p>Photos</p>
                </a>
              </Link>
            </li>
            <li className="pr-4 opacity-60 ease-in duration-200 hover:opacity-100 ">
              <Link href="/videos">
                <a>
                  <p>Videos</p>
                </a>
              </Link>
            </li>
            <li className=" opacity-60 ease-in duration-200 hover:opacity-100 ">
              <Link href="/about">
                <a>
                  <p>About</p>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
