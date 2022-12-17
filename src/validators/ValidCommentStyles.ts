// ./src/validators/ValidCommentStyles.ts

const ValidCommentStyles = [
    'normal',
    'italic',
    'oblique',
] as const

type ValidCommentStyles = typeof ValidCommentStyles[number]
  
export default ValidCommentStyles
