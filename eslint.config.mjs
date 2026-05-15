import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
