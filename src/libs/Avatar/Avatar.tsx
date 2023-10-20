import React from "react";
import "./Avatar.scss";

interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avtName: string;
  arrowElement?: JSX.Element;
}

export default function Avatar(props: IAvatarProps) {
  const { avtName, arrowElement, ...restProps } = props;

  return (
    <div className="Avatar" {...restProps}>
      <img
        src={require("../../assets/images/frame-avt.png")}
        alt="frame-avt"
        className="pos-1"
      />
      <img
        src={require(`../../assets/images/${avtName}`)}
        alt="avt-man"
        className="pos-2"
      />
      {arrowElement}
    </div>
  );
}
