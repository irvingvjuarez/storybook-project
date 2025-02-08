/** @type { import('@storybook/html').Preview } */

const customViewports = {
  smallUgly: {
    name: 'Small Ugly',
    styles: {
      width: '360px',
      height: '540px',
    },
  },
  mediumUgly: {
    name: 'Medium Ugly',
    styles: {
      width: '1024px',
      height: '1200px',
    },
  },
}

const preview = {
  parameters: {
    viewMode: "docs",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  }
};

export default preview;
