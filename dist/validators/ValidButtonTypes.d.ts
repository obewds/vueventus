declare const ValidButtonTypes: readonly ["button", "submit", "reset"];
type ValidButtonTypes = typeof ValidButtonTypes[number];
export default ValidButtonTypes;
