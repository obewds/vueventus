// ./cli/generators/indexMdFile.mjs

export default function () {

const output = `---
title: Index Page
---

<script setup>
    // ./src/pages/index.md
</script>

# Hello

This is a counter

<counter/>

<br>

MousePos (Client Only):

<client-only>
    <mouse-pos/>
</client-only>

`

return output
        
}
