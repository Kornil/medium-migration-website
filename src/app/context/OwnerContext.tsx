import createContextFactory from "./createContext";

export interface OwnerContextValueInterface {
  name: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const ownerContextValue: OwnerContextValueInterface = {
  name: "Francesco Agnoletto",
  socials: {
    github: "https://github.com/Kornil",
    linkedin: "https://www.linkedin.com/in/francesco-agnoletto-176171114/",
    twitter: "https://twitter.com/Fragno92"
  }
};

const OwnerContext = createContextFactory("Owner", ownerContextValue);

export default OwnerContext;
