declare const ValidAudioSourceTypes: readonly ["audio/flac", "audio/mp4", "audio/mpeg", "audio/ogg", "audio/x-flac", "audio/webm"];
declare type ValidAudioSourceTypes = typeof ValidAudioSourceTypes[number];
export default ValidAudioSourceTypes;
