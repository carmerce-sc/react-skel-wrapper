import React from "react";
import picsso, { css } from "react-picsso";
import SkelWrapperPropsType from "../types/SkelWrapperPropsType";

const SkelWrapper = ({
  children,
  loading,
  width,
  height,
  color = "#eaeaea",
  borderRadius = 5,
  fadeIn = false,
  uprise = false,
  ...props
}: SkelWrapperPropsType): React.ReactNode => (
  <picsso.div pb={props.pb ?? 8} pr={props.pr ?? 8}>
    <picsso.div
      css={css`
        ${skelWrapperAnimation}
        ${afterSkelWrapperFadeIn}
        ${afterSkelWrapperUprise}
        ${loading
          ? loadingStyle({ color })
          : afterLoadingEffect({ fadeIn, uprise })}
      `}
      width={width !== undefined && loading ? width : undefined}
      height={height !== undefined && loading ? height : undefined}
      borderRadius={borderRadius}
    >
      <picsso.div /** raw text인 children에 opacity 적용하기 위한 div */>
        {children}
      </picsso.div>
    </picsso.div>
  </picsso.div>
);

export default SkelWrapper;

const skelWrapperAnimation = css`
  @keyframes skel-wrapper-animation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const afterSkelWrapperFadeIn = css`
  @keyframes after-skel-wrapper-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const afterSkelWrapperUprise = css`
  @keyframes after-skel-wrapper-uprise {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const loadingStyle = ({ color }: { color: string }) => css`
  div {
    opacity: 0;
  }
  animation: skel-wrapper-animation infinite 1s;
  background: ${color};
`;

const afterLoadingEffect = ({
  fadeIn,
  uprise,
}: {
  fadeIn: boolean;
  uprise: boolean;
}) => css`
  div {
    ${fadeIn
      ? css`
          animation: after-skel-wrapper-fade-in forwards 0.5s;
        `
      : ""}
    ${uprise
      ? css`
          animation: after-skel-wrapper-uprise forwards 0.4s;
        `
      : ""}
  }
`;
