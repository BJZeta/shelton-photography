import { sanityClient } from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function PhotoDetail({ mainImage, title }) {
  return <img src={urlFor(mainImage).width(200).url()} alt={title} />;
}

