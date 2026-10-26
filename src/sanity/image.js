import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "placeholder-project-id",
  dataset: dataset || "production",
});

export const urlForImage = (source) => {
  if (!source) return "";
  // If it's already a string URL (e.g. from local fallback)
  if (typeof source === "string") return source;
  if (!source.asset) return "";
  return imageBuilder.image(source).auto("format").fit("max").url();
};
