import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import App from './App';
import '../src/Styles/Index.css';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Box position={'fixed'} right={0} border="2px solid grey">
        <ColorModeSwitcher
          justifySelf="flex-end"
          position={'absolute'}
          right={0}
          fontSize="24"
          my={2}
        />
      </Box>
      <App />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
