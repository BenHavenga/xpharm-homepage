import nextPlugin from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [".next/*", "out/*", "node_modules/*"],
  },
  ...nextPlugin,
];

export default eslintConfig;
