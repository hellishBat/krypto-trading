/// <reference types="vite/client" />
declare module '*.jpg?format=webp' {
  const src: string
  export default src
}

declare module '*.jpg?format=avif' {
  const src: string
  export default src
}

declare module '*.png?format=webp' {
  const src: string
  export default src
}

declare module '*.png?format=avif' {
  const src: string
  export default src
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string
      height?: string
      width?: string
    }
  >

  const src: string
  export default src
}

declare module '*.json' {
  const value: any
  export default value
}
