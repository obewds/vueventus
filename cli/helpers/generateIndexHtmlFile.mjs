// ./cli/helpers/generateIndexHtmlFile.mjs

// TODO: integrate this module into cli build
// TODO: delete original stubs/vite-ssg and stubs/vue-ts index.html files

export default function () {

const output = `<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to VueVentus</title>
        <meta name="description" content="A component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps"/>

        <!-- Color Mode Functionality -->
        <script>
            // On page load or when changing colorMode, best to add inline in head to avoid FOUC
            if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                localStorage.setItem('colorMode', 'dark');
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#242426';
            } else {
                localStorage.setItem('colorMode', 'light');
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = '#f8f8f8';
            }
        </script>

    </head>

    <body>

        <div id="app"></div>
        
        <script type="module" src="/src/main.ts"></script>

    </body>

</html>

`

return output
        
}