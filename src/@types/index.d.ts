declare module "*.png";
declare module "*.jpeg";

// Language: typescript
// Path: src/@types/index.d.ts
declare module "*.svg" {
  import { FC } from "react";
  import { SvgProps } from "react-native-svg";
  const content: FC<SvgProps>;
  export default content;
}
