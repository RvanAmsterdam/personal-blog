// observable.d.ts
// Declare Prism oneDark theme missing from @types/react-syntax-highlighter
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/439

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
    export { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
  }
  
  declare module 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark' {
    const style: any
    export default style
  }