import React from "react";
import picsso from "react-picsso";
import RepeatPropsType from "../types/RepeatPropsType";

const Repeat = ({
  children,
  loading,
  amount,
  repeatDirection = "column",
}: RepeatPropsType): React.ReactNode =>
  loading ? (
    new Array(amount).fill(undefined).map((_, i) => (
      <picsso.div key={i} flex flexDirection={repeatDirection}>
        {children}
      </picsso.div>
    ))
  ) : (
    <picsso.div>{children}</picsso.div>
  );

export default Repeat;
