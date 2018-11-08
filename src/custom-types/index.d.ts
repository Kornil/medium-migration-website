declare module "*.png";

declare module "*.svg";

declare module "*.json";

declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string;
  }
}
