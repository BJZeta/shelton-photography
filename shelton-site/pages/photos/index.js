import Layout from "../../components/Layout";
import "react-slideshow-image/dist/styles.css";
import { sanityClient } from "../../client";

export default function PhotosPage({ photos }) {
  return (
    <Layout>
      <div className="h-[100vh] w-full bg-black">
        <div id="headline" className="float-right text-white mr-8 mt-5">
          <h1 className="text-5xl">Photos</h1>
          <p className="text-2xl">A collection of my photography</p>
          {console.log(photos)}
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
