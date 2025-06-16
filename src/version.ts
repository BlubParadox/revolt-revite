export const APP_VERSION = "__APP_VERSION__";
export const IS_REVOLT =
    import.meta.env.VITE_API_URL === "https://api.foxhaven.club" ||
    // future proofing
    import.meta.env.VITE_API_URL === "https://api.foxhaven.club" ||
    import.meta.env.VITE_API_URL === "https://api.foxhaven.club";
