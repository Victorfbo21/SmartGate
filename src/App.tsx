import { BrowserRouter } from 'react-router-dom';
import { useRoutes, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import router from 'src/router';

import { LocalizationProvider } from '@mui/x-date-pickers';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';



const App = () => {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <CssBaseline />
        {content}
        <ToastContainer autoClose={3000} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
