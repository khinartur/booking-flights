declare module '*.svg' {
  const image: string;
  export default image;
}

declare module '*.png' {
  const image: string;
  export default image;
}

type Nullable<T> = T | null
