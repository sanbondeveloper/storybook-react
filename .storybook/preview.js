import '../src/index.css'; // 스타일 적용

import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  // parameters : 스토리북의 기능 및 애드온 동작을 제어하는 데 사용
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
