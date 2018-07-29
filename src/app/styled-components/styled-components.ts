import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const theme = {
  primaryColor: "#111"
};

export { css, injectGlobal, keyframes, ThemeProvider, theme };
export default styled;
