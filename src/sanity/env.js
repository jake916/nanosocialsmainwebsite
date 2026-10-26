export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2024-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "dowm3aef";

// Check if actual Sanity credentials have been provided
export const isSanityConfigured =
  Boolean(projectId) && projectId !== "placeholder-project-id";
