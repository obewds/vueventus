declare const ValidVideoSourceTypes: readonly ["video/mp4", "video/ogg", "video/webm"];
declare type ValidVideoSourceTypes = typeof ValidVideoSourceTypes[number];
export default ValidVideoSourceTypes;
