// ./cli/generators/indexHtmlFile.mjs

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
                document.documentElement.style.color = '#f8f8f8';
            } else {
                localStorage.setItem('colorMode', 'light');
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = '#f8f8f8';
                document.documentElement.style.color = '#242426';
            }
        </script>

    </head>

    <body class="scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800">

        <div id="app"></div>
        
        <script type="module" src="/src/main.ts"></script>

    </body>

</html>

`

return output
        
}
