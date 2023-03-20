// ./src/types/VvPrismVarsProps.ts

import ValidCommentStyles from '../validators/ValidCommentStyles'
import ValidUrlDecorations from '../validators/ValidUrlDecorations'

export interface VvPrismVarsProps {
    commentStyle: ValidCommentStyles
    debug: boolean
    fontSize: string
    lineHeight: string
    lineHighlightOpacity: string
    textShadow: string
    urlDecoration: ValidUrlDecorations
}
