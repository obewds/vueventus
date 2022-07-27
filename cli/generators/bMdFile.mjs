// ./cli/generators/bMdFile.mjs

export default function () {

const output = `---
title: Nested Deep Page B
meta:
  - name: description
    content: Nested Deep Page B description
---

<script setup>
    // ./src/pages/nested/deep/b.md
</script>

# Nested Deep Page B

<img src="../../../assets/logo-obe.svg" alt="">

`

return output
    
}
