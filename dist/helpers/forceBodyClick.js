// ./src/helpers/forceBodyClick.ts
export default function () {
    if (typeof window !== 'undefined' && document) {
        document.body.click();
        document.body.dispatchEvent(new Event("click"));
    }
}
//# sourceMappingURL=forceBodyClick.js.map