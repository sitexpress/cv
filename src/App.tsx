import '@mantine/core/styles.css';
import 'animate.css';

import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from './store';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </MantineProvider>
  );
}
