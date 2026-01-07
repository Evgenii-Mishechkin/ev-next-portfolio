import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "*.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "split-flap-digit": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        alphabet?: string;
      };
    }
  }
}

export {};
