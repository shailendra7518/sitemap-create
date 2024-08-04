import PicoSanity from "picosanity";
export const config = {
  apiVersion: "2021-03-25",
  dataset: "production" || "",
  projectId: "q62byq95" || "",
  useCdn: process.env.NODE_ENV === "production",
};
// // Standard client for fetching data
export const sanityClient = new PicoSanity(config);
