import { createTheme, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';
// export const theme = createTheme({
//   /** Put your mantine theme override here */
// });


export const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});