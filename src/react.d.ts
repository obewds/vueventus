// https://github.com/johnsoncodehk/volar/discussions/592#discussioncomment-2570488
// --------------------------------------------------------------------------------
// This shim/hack solves the bug where using the class=""/:class="" html attribute
// makes Typescript complain and suggests using React's className approach... 
// which isn't ideal in a Vue.js code base.

import { AriaAttributes, DOMAttributes } from 'react' // not needed if skipLibCheck = true

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    class?: string | string[]
    dataTest?: string
  }
  interface SVGProps<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's SVGProps
    class?: string | string[]
    'xml:space'?: string
  }
}
