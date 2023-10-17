import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

const { Text: AntText } = Typography;

interface IText extends TextProps {
  children: React.ReactNode;
}

export const Text = (props: IText) => {
  const { children, ...restProps } = props;

  return (
    <AntText className="Text" {...restProps}>
      {children}
    </AntText>
  );
};
