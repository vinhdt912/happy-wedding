import { Typography } from "antd";

const { Paragraph: AntParagraph } = Typography;

interface ITextColor {
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
