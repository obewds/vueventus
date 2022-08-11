// ./src/helpers/forceBodyClick.ts

export default function (): void {
    if (typeof window !== 'undefined' && document) {
        document.body.click()
    }
}
