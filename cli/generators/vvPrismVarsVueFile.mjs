// ./cli/generators/vvPrismVarsVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/PrismVars.vue' : './src/components/vv/elements/VvPrismVars.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'
let appColorsPath = useNuxtPaths ? '../../app.colors.json' : '../../../app.colors.json'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { ValidCommentStyles, ValidUrlDecorations } from '@obewds/vueventus'
    import appColors from '${appColorsPath}'
    import appVv from '${appVvPath}'

    export default defineComponent({

        props: {
            commentStyle: {
                type: String as PropType<ValidCommentStyles>,
                default: appVv.defaults.VvPrismVars.commentStyle,
                validator: (prop: ValidCommentStyles) => (ValidCommentStyles).includes(prop),
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvPrismVars.debug,
            },
            fontSize: {
                type: String,
                default: appVv.defaults.VvPrismVars.fontSize,
            },
            lineHeight: {
                type: String,
                default: appVv.defaults.VvPrismVars.lineHeight,
            },
            lineHighlightOpacity: {
                type: String,
                default: appVv.defaults.VvPrismVars.lineHighlightOpacity,
            },
            textShadow: {
                type: String,
                default: appVv.defaults.VvPrismVars.textShadow,
            },
            urlDecoration: {
                type: String as PropType<ValidUrlDecorations>,
                default: appVv.defaults.VvPrismVars.urlDecoration,
                validator: (prop: ValidUrlDecorations) => (ValidUrlDecorations).includes(prop),
            },
        },
        
        setup () {

            return { appColors }

        },

    })

</script>


<template>

    <component
        is="style"
        v-once
        :data-vv-prism-vars-prop-comment-style="debug ? commentStyle : null"
        :data-vv-prism-vars-prop-font-size="debug ? fontSize : null"
        :data-vv-prism-vars-prop-line-height="debug ? lineHeight : null"
        :data-vv-prism-vars-prop-line-highlight-opacity="debug ? lineHighlightOpacity : null"
        :data-vv-prism-vars-prop-text-shadow="debug ? textShadow : null"
        :data-vv-prism-vars-prop-url-decoration="debug ? urlDecoration : null"
    >
        :root {
            --vv-comment-style: {{ commentStyle }};
            --vv-url-decoration: {{ urlDecoration }};
            --vv-font-size: {{ fontSize }};
            --vv-line-height: {{ lineHeight }};
            --vv-text-shadow: {{ textShadow }};
            --vv-line-highlight-opacity: {{ lineHighlightOpacity }};

            --vv-light-foreground: {{ appColors.coolGray['700'] }};
            --vv-light-background: {{ appColors.white }};
            --vv-light-comment: {{ appColors.warmGray['400'] }};

            --vv-light-boolean: {{ appColors.indigo['600'] }};
            --vv-light-builtin: {{ appColors.green['500'] }}; /* controls color of html element tags */
            --vv-light-class: {{ appColors.blue['400'] }};
            --vv-light-constant: {{ appColors.lightBlue['500'] }};
            --vv-light-decorator: {{ appColors.lightBlue['600'] }};
            --vv-light-deleted: {{ appColors.red['600'] }};
            --vv-light-function: {{ appColors.violet['500'] }};
            --vv-light-important: {{ appColors.red['500'] }}; /* controls markdown headline and css important */
            --vv-light-interpolation: {{ appColors.cyan['600'] }};
            --vv-light-json-property: {{ appColors.lime['500'] }};
            --vv-light-keyword: {{ appColors.fuchsia['500'] }};
            --vv-light-keyword-control: {{ appColors.pink['600'] }};
            --vv-light-line-highlight-background: {{ appColors.gray['200'] }};
            --vv-light-line-number: {{ appColors.gray['100'] }}; /* controls color of the dividing line for line numbers */
            --vv-light-line-number-gutter: {{ appColors.gray['200'] }}; /* controls color of line number digits */
            --vv-light-literal: {{ appColors.cyan['600'] }};
            --vv-light-namespace: {{ appColors.lightBlue['600'] }};
            --vv-light-number: {{ appColors.pink['600'] }};
            --vv-light-property: {{ appColors.cyan['600'] }};
            --vv-light-operator: {{ appColors.yellow['500'] }};
            --vv-light-punctuation: {{ appColors.amber['500'] }};
            --vv-light-regex: {{ appColors.rose['500'] }};
            --vv-light-selection-background: {{ appColors.gray['100'] }};
            --vv-light-selector: {{ appColors.teal['500'] }};
            --vv-light-string: {{ appColors.emerald['600'] }};
            --vv-light-symbol: {{ appColors.purple['500'] }}; /* controls color of a link in markdown */
            --vv-light-variable: {{ appColors.blue['500'] }}; /* controls color of php and apache vars */

            
            --vv-dark-foreground: {{ appColors.gray['200'] }};
            --vv-dark-background: {{ appColors.black }};
            --vv-dark-comment: {{ appColors.warmGray['500'] }};

            --vv-dark-boolean: {{ appColors.indigo['200'] }};
            --vv-dark-builtin: {{ appColors.green['400'] }}; /* controls color of html element tags */
            --vv-dark-class: {{ appColors.blue['300'] }};
            --vv-dark-constant: {{ appColors.lightBlue['300'] }};
            --vv-dark-decorator: {{ appColors.lightBlue['200'] }};
            --vv-dark-deleted: {{ appColors.red['200'] }};
            --vv-dark-function: {{ appColors.violet['200'] }};
            --vv-dark-important: {{ appColors.red['300'] }}; /* controls markdown headline and css important */
            --vv-dark-interpolation: {{ appColors.cyan['300'] }};
            --vv-dark-json-property: {{ appColors.lime['300'] }};
            --vv-dark-keyword: {{ appColors.fuchsia['300'] }};
            --vv-dark-keyword-control: {{ appColors.pink['200'] }};
            --vv-dark-line-highlight-background: {{ appColors.coolGray['800'] }};
            --vv-dark-line-number: {{ appColors.gray['900'] }}; /* controls color of dividing line for line numbers */
            --vv-dark-line-number-gutter: {{ appColors.gray['700'] }}; /* controls color of line number digits */
            --vv-dark-literal: {{ appColors.cyan['300'] }};
            --vv-dark-namespace: {{ appColors.lightBlue['200'] }};
            --vv-dark-number: {{ appColors.pink['200'] }};
            --vv-dark-property: {{ appColors.cyan['300'] }};
            --vv-dark-operator: {{ appColors.yellow['300'] }};
            --vv-dark-punctuation: {{ appColors.amber['300'] }};
            --vv-dark-regex: {{ appColors.rose['300'] }};
            --vv-dark-selection-background: {{ appColors.gray['800'] }};
            --vv-dark-selector: {{ appColors.teal['400'] }};
            --vv-dark-string: {{ appColors.emerald['300'] }};
            --vv-dark-symbol: {{ appColors.purple['300'] }}; /* controls color of a link in markdown */
            --vv-dark-variable: {{ appColors.blue['300'] }}; /* controls color of php and apache vars */
        }
    </component>

</template>


<style>

    html {
        --prism-comment-style: var(--vv-comment-style);
        --prism-url-decoration: var(--vv-url-decoration);
    }
    
    html:not(.dark) {
        --prism-scheme: light;
        --prism-foreground: var(--vv-light-foreground); /* #393a34; */
        --prism-background: var(--vv-light-background); /* #f8f8f8; */
        --prism-comment: var(--vv-light-comment); /* #758575; */

        --prism-boolean: var(--vv-light-boolean); /* #1c6b48; */
        --prism-builtin: var(--vv-light-builtin);/* #800000; */
        --prism-class: var(--vv-light-class); /* #2b91af; */
        --prism-constant: var(--vv-light-constant); /* #a65e2b; */
        --prism-decorator: var(--vv-light-decorator); /* #bd8f8f; */
        --prism-deleted: var(--vv-light-deleted); /* #9a050f; */
        --prism-function: var(--vv-light-function); /* #849145; */
        --prism-important: var(--vv-light-important);
        --prism-interpolation: var(--vv-light-interpolation);
        --prism-json-property: var(--vv-light-json-property); /* #698c96; */
        --prism-keyword: var(--vv-light-keyword); /* #248459; */
        --prism-keyword-control: var(--vv-light-keyword-control);
        --prism-line-highlight-background: var(--vv-light-line-highlight-background);  /* #444444; */
        --prism-line-number: var(--vv-light-line-number); /* #296aa3; */
        --prism-line-number-gutter: var(--vv-light-line-number-gutter); /* #eeeeee; */
        --prism-literal: var(--vv-light-literal); /* #36acaa; */
        --prism-namespace: var(--vv-light-namespace); /* #444444; */
        --prism-number: var(--vv-light-number); /* #6394bf; */
        --prism-operator: var(--vv-light-operator);
        --prism-property: var(--vv-light-property); /* #ce9178; */
        --prism-punctuation: var(--vv-light-punctuation); /* #80817d; */
        --prism-regex: var(--vv-light-regex); /* #ad502b; */
        --prism-selection-background: var(--vv-light-selection-background); /* #444444; */
        --prism-selector: var(--vv-light-selector);
        --prism-string: var(--vv-light-string); /* #bc8671; */
        --prism-symbol: var(--vv-light-symbol);
        --prism-variable: var(--vv-light-variable); /* #c2b36e; */
    }

    html.dark {
        --prism-scheme: dark;
        --prism-foreground: var(--vv-dark-foreground); /* #d4d4d4; */
        --prism-background: var(--vv-dark-background); /* #1e1e1e; */
        --prism-comment: var(--vv-dark-comment); /* #758575; */

        --prism-boolean: var(--vv-dark-boolean); /* #1c6b48; */
        --prism-builtin: var(--vv-dark-builtin); /* #d16969; */
        --prism-class: var(--vv-dark-class); /* #4ec9b0; */
        --prism-constant: var(--vv-dark-constant); /* #a65e2b; */
        --prism-decorator: var(--vv-dark-decorator); /* #bd8f8f; */
        --prism-deleted: var(--vv-dark-deleted); /* #9a050f; */
        --prism-function: var(--vv-dark-function); /* #dcdcaa; */
        --prism-important: var(--vv-dark-important);
        --prism-interpolation: var(--vv-dark-interpolation);
        --prism-json-property: var(--vv-dark-json-property); /* #6b8b9e; */
        --prism-keyword: var(--vv-dark-keyword); /* #38a776; */
        --prism-keyword-control: var(--vv-dark-keyword-control);
        --prism-line-highlight-background: var(--vv-dark-line-highlight-background);  /* #444444; */
        --prism-line-number: var(--vv-dark-line-number); /* #888888; */
        --prism-line-number-gutter: var(--vv-dark-line-number-gutter); /* #eeeeee; */
        --prism-literal: var(--vv-dark-literal); /* #36acaa; */
        --prism-namespace: var(--vv-dark-namespace); /* #aaaaaa; */
        --prism-number: var(--vv-dark-number); /* #6394bf; */
        --prism-operator: var(--vv-dark-operator);
        --prism-property: var(--vv-dark-property); /* #ce9178; */
        --prism-punctuation: var(--vv-dark-punctuation); /* #d4d4d4; */
        --prism-regex: var(--vv-dark-regex); /* #ad502b; */
        --prism-selection-background: var(--vv-dark-selection-background); /* #444444; */
        --prism-selector: var(--vv-dark-selector);
        --prism-string: var(--vv-dark-string); /* #ce9178; */
        --prism-symbol: var(--vv-dark-symbol);
        --prism-variable: var(--vv-dark-variable); /* #c2b36e; */
    }

    code[class*="language-"], 
    pre[class*="language-"] {
        text-shadow: var(--vv-text-shadow) !important;
        line-height: var(--vv-line-height) !important;
        font-size: var(--vv-font-size) !important;
    }

    code[class*="language-"] .important, 
    pre[class*="language-"] .important {
        color: var(--prism-important);
    }

    code[class*="language-"] .line-highlight, 
    pre[class*="language-"] .line-highlight {
        opacity: var(--vv-line-highlight-opacity);
    }

    code[class*="language-"] .url-link, 
    pre[class*="language-"] .url-link {
        text-decoration: var(--prism-url-decoration);
    }

    div.code-toolbar > .toolbar {
        opacity: 1;
    }

    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button {
        padding: 6px 10px;
        color: #000000;
        background-color: #ffffff;
        text-transform: uppercase;
        opacity: 0.5;
        transition: all ease 300ms;
    }

    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button:hover {
        opacity: 1;
    }

    html.dark div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button {
        color: black;
    }

</style>

`

return output

}
