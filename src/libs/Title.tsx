import { Typography, TypographyProps } from "antd";

const { Title: AntTitle } = Typography;

interface ITitle extends TypographyProps {
  children: React.ReactNode;
}

export const Title = (props: ITitle) => {
  const { children, ...restProps } = props;

  return (
    <AntTitle level={1} className="Title" {...restProps}>
      {children}
    </AntTitle>
  );
};
