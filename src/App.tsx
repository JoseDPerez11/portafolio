
import { MantineProvider } from '@mantine/core';
import { pdfjs } from 'react-pdf';

import '@mantine/core/styles.css';
import './App.css';
import HomePage from './components/HomePage';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <MantineProvider >
    <HomePage />
    </MantineProvider>
  );
}

export default App;
