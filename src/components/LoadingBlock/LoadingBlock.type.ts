import { HTMLAttributes } from "react";

export interface LoadingBlockProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 顏色要通過此參數設置才會有效，預設$Green
   */
  color?: string;
  /**
   * loading dot的間距，預設20px
   */
  dotSpacing?: string;
  /**
   * loading dot的大小，預設15px
   */
  size?: string;
}
