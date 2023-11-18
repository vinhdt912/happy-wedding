import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext as useReactContext,
  useState,
} from "react";

export interface IContextProps {
  guestOf: string;
  setGuestOf: React.Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IContextProps>({
  guestOf: "",
  setGuestOf: () => false,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [guestOf, setGuestOf] = useState("");

  const value: IContextProps = {
    guestOf: guestOf,
    setGuestOf: setGuestOf,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContext = () => {
  return useReactContext(Context);
};
