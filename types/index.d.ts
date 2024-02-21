import { ReactElement } from "react";
import SkelWrapperPropsType from "./SkelWrapperPropsType";
import RepeatPropsType from "./RepeatPropsType";

declare function SkelWrapper(el: SkelWrapperPropsType): ReactElement;
export default SkelWrapper;

export declare function Repeat(el: RepeatPropsType): ReactElement;

declare module "react-skel-wrapper" {}
