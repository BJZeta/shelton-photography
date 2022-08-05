import React from "react";
import PhotoDetail from "../../components/PhotoDetail";
import { BiArrowBack } from "react-icons/bi";
import { sanityClient } from "../../client";
import Link from "next/link";

export default function PhotoPage({ mainImage, title, description }) {
  return (
    <div className="gird grid-rows-2 h-screen py-20 bg-gray-800 text-slate-100 overflow-auto">
        <div className="flex justify-evenly text-5xl px-20 mb-10">
          <Link href="/photos/">
            <a>
              <BiArrowBack/>
            </a>
          </Link>
          <h2>{title}</h2>
        </div>
        <div className="xl:flex w-1/2 mx-auto items-center">
          <PhotoDetail mainImage={mainImage} title={title} />
          <p className="px-10 text-xl">{description}</p>
        </div>
      </div>
  );
}

const query = `*[_type == "photo" && slug.current == $slug][0]{
  mainImage,
  title,
  description,
  slug,
}`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "photo" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const photo = await sanityClient.fetch(query, { slug });

  if (!photo) {
    return {
      props: null,
      notFound: true,
    };
  } else
    return {
      props: {
        mainImage: photo.mainImage,
        title: photo.title,
        description: photo.description,
        slug: photo.slug,
      },
    };
}
