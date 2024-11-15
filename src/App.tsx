
import { createTheme, MantineProvider } from '@mantine/core';
import { pdfjs } from 'react-pdf';

import '@mantine/core/styles.css';
import './App.css';
import HomePage from './components/HomePage';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });

  return (
    <MantineProvider theme={theme} >
    <HomePage />
    </MantineProvider >
  );
}

export default App;
