import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import "./TextColor.scss";

const { Paragraph: AntParagraph } = Typography;

interface ITextColor extends TextProps {
  children: React.ReactNode;
}

export const TextColor = (props: ITextColor) => {
  const { children, ...restProps } = props;

  return (
    <AntParagraph className="TextColor" {...restProps}>
      {children}
    </AntParagraph>
  );
};
