import React from "react";
import Link from "next/link";

export default function PageLinks({ title, link, info, image }) {
  return (
    <div className="w-[30rem]  mx-auto text-center my-10 lg:my-0">
      <Link href={link}>
        <a>
          <div
            className={`w-full h-80 rounded-3xl ${image} bg-image-style`}
          >
            <h2 className="bg-gradient-to-b rounded-t-3xl from-white to-slate-200 text-2xl">
              {title}
            </h2>
          </div>
        </a>
      </Link>

      <p className="mt-4 text-xl text-white">{info}</p>
    </div>
  );
}
