module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/components/**/*.stories.mdx",
    "../src/styles/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}