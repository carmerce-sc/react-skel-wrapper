import { numStr } from "react-picsso";

type SkelWrapperPropsType = {
  children?: React.ReactNode;
  loading: boolean;
  amount: number;
  /** Default is column. */
  repeatDirection?: "column" | "row";
};

export default SkelWrapperPropsType;
