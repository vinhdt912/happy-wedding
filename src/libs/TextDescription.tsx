import { Text } from "./Text";

interface ITextDescription {
  children: React.ReactNode;
}

export const TextDescription = (props: ITextDescription) => {
  const { children } = props;

  return (
    <div className="TextDescriptionContainer">
      <Text>{children}</Text>
    </div>
  );
};
