declare const ValidInputTypes: readonly ["color", "date", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "time", "url"];
type ValidInputTypes = typeof ValidInputTypes[number];
export default ValidInputTypes;
