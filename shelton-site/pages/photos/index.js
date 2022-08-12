import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import PhotoModal from "../../components/PhotoModal";
import PhotoDetail from "../../components/PhotoDetail";
import "react-slideshow-image/dist/styles.css";
import { sanityClient } from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function PhotosPage({ photos }) {
  // let router = useRouter()

  return (
    <Layout>    
      <div className="h-screen w-full px-10 pt-10">
        <div id="headline" className="float-right text-white">
          <h1 className="text-5xl">Photos</h1>
          <p className="text-2xl">A collection of my photography</p>
        </div>

        <div id="image-section" className="w-full grid grid-cols-1 lg:grid-cols-3 ">
          {photos.length > 0 &&
            photos.map(
              ({ _id, title = "", slug = "", mainImage }) =>
                slug && (
                  <div key={_id} className="w-1/2">
                    <Link
                      href={`/photos/[slug]`}
                      as={`/photos/${slug.current}`}
                    >
                      <a>
                        <img
                          src={urlFor(mainImage).width(400).url()}
                          alt={title}
                          className="w-full"
                        />
                      </a>
                    </Link>
                  </div>
                )
            )}
        </div>
      </div>
    </Layout>
  );
}

const query = `
  *[_type == "photo" && publishedAt < now()] | order(publishedAt desc)
`;

export async function getStaticProps() {
  const photos = await sanityClient.fetch(query);
  return {
    props: {
      photos,
    },
  };
}
