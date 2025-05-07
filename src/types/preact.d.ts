import { JSX } from 'preact';

declare module 'preact' {
  interface ImgHTMLAttributes<T extends EventTarget = HTMLImageElement>
    extends JSX.HTMLAttributes<T> {
    alt?: string;
    decoding?: 'sync' | 'async' | 'auto';
    height?: number | string;
    loading?: 'lazy' | 'eager';
    sizes?: string;
    src?: string;
    srcset?: string;
    width?: number | string;
    crossOrigin?: string;
    referrerPolicy?: string;
  }
}
