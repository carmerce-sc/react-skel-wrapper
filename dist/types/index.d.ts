import { ReactElement } from 'react';
import { numStr, PicssoDefaultConfigType } from 'react-picsso';

type SkelWrapperPropsType$1 = {
  children?: React.ReactNode;
  loading: boolean;
  width?: numStr;
  height?: numStr;
  /** your skeleton color. Default is #eaeaea. */
  color?: string;
  /** Default is 5. */
  borderRadius?: numStr;
  /** Enable fade-in effect after skeleton wrapper. Default is false */
  fadeIn?: boolean;
  /** Enable uprise effect after skeleton wrapper. Default is false */
  uprise?: boolean;
} & PicssoDefaultConfigType;

type SkelWrapperPropsType = {
  children?: React.ReactNode;
  loading: boolean;
  amount: number;
  /** Default is column. */
  repeatDirection?: "column" | "row";
};

declare function SkelWrapper(el: SkelWrapperPropsType$1): ReactElement;


declare function Repeat(el: SkelWrapperPropsType): ReactElement;

declare module "react-skel-wrapper" {}

export { Repeat, SkelWrapper as default };
