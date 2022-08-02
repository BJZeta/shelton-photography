import React from "react";
import PhotoDetail from "../../components/PhotoDetail";
import { BiArrowBack } from "react-icons/bi";
import { sanityClient } from "../../client";
import Link from "next/link";

export default function PhotoPage({ mainImage, title }) {
  return (
    <div className="relative w-screen h-screen bg-gray-800">
      <Link href="/photos/">
        <a>
          <BiArrowBack />
        </a>
      </Link>

      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen">
          <div className="w-1/2">
            <PhotoDetail mainImage={mainImage} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

const query = `*[_type == "photo" && slug.current == $slug][0]{
  mainImage,
  title,
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
        slug: photo.slug,
      },
    };
}