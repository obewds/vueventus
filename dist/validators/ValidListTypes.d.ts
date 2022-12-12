declare const ValidListTypes: readonly ["ul", "ol"];
type ValidListTypes = typeof ValidListTypes[number];
export default ValidListTypes;
