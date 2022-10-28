import sanityClient from '@sanity/client';
import imagUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "ry5xwvqs",
  dataset: "blog",
  useCdn: true,
  apiVersion: "2022-07-15",
  token:
    "skkW3izD4g3TShAvf2xRy6byvYiT0EbWKK29NiF53nH6OKFb8hfI3bYcIruJRJAs3LoaBBmJ6p4KA1ofstANZFIQxqE1isLWrO7tdIgVUNurpqjOpLthbE8fg5VZiUYFkgnyovhHgm0PEjiZaZx9kVuD8kzFgU1w1YYJHRXRhXysDIip5Iuc",
});

const builder = imagUrlBuilder(sanityClient);
export function urlFor(source) {
  return builder.image(source);
}
