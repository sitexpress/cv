// import ReactDOM from 'react-dom/client';
// import { MantineThemeProvider } from '@mantine/core';
// import App from './App';
// import { theme } from './theme';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <MantineThemeProvider theme={theme} >
//       <App />
//   </MantineThemeProvider>
// );


import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
  </MantineProvider>
);
