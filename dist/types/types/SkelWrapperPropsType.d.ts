import { PicssoDefaultConfigType, numStr } from "react-picsso";
type SkelWrapperPropsType = {
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
export default SkelWrapperPropsType;
//# sourceMappingURL=SkelWrapperPropsType.d.ts.map