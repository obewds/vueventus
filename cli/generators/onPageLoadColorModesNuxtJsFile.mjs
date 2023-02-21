// ./cli/generators/onPageLoadColorModesNuxtJsFile.mjs

export default function () {

const output = `// ./public/js/on-page-load-color-modes.js

// On page load or when changing colorMode, best to add inline in head to avoid FOUC
if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('colorMode', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#242426';
    document.documentElement.style.color = '#e1e1e3';
} else {
    localStorage.setItem('colorMode', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.style.backgroundColor = '#e1e1e3';
    document.documentElement.style.color = '#242426';
}

`

return output

}
