import createContextFactory from "./createContext";

interface OwnerContextValueInterface {
  name: string;
}

export const ownerContextValue: OwnerContextValueInterface = {
  name: "Francesco Agnoletto"
};

const OwnerContext = createContextFactory("Owner", ownerContextValue);

export default OwnerContext;
