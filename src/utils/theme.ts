import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Kumbh Sans Variable', sans-serif`,
    body: `'Kumbh Sans Variable', sans-serif`,
  },
  colors: {
    red: {
      100: "#2DEADF",
      200: "#2ADFD4",
      300: "#27D4C9",
      400: "rgb(36,196,186)",
      500: "rgb(36,196,186,0.8)",
      600: "rgb(36,196,186,0.7)",
      700: "rgb(36,196,186,0.6)",
      800: "rgb(36,196,186,0.5)",
      900: "rgb(36,196,186,0.4)",
    },
  },
});

export default theme;
