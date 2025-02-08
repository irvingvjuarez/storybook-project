/** @type { import('@storybook/html').Preview } */

const preview = {
  parameters: {
    viewMode: "docs",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
