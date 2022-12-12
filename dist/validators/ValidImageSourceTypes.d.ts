declare const ValidImageSourceTypes: readonly ["image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp"];
type ValidImageSourceTypes = typeof ValidImageSourceTypes[number];
export default ValidImageSourceTypes;
