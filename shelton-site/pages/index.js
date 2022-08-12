import Layout from "../components/Layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PageLinks from "../components/PageLinks";

export default function Home() {
  return (
    <Layout>
      <div className="relative flex w-full h-[50em] bg-black z-0 mt-2">
        <div id="jumbotron" className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>

      <div className="w-full bg-gray-700 grid grid-cols-1 lg:grid-cols-2 py-10 ">
        <PageLinks
          title="Videos"
          link="/videos"
          info="See some of our latest videos"
          image="bg-[url('/static/shelton-pic4.jpg')]"
        />
        <PageLinks
          title="Photos"
          link="/photos"
          info="Check out my latest pics"
          image="bg-[url('/static/shelton-pic5.jpg')]"
        />
      </div>
    </Layout>
  );
}
