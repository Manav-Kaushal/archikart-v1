import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function sanityImageToUrl(source: any) {
  return builder.image(source);
}

export default sanityImageToUrl;
