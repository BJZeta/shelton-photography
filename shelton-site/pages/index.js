import Layout from "../components/Layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Home() {
  return (
    <Layout>
      <div className="relative flex w-full h-[50em] bg-black -z-10 mt-2">
        <div id="jumbotron" className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>

      <section className="w-full h-80 grid grid-flow-col grid-cols-3">
        <div>
          <h1>Videos</h1>
        </div>
        <div>
          <h1>Photos</h1>
        </div>
        <div>
          <h1>Posts</h1>
        </div>
      </section>
    </Layout>
  );
}
