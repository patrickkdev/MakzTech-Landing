import '@/styles/globals.css';
import '@/styles/Home.css';
import '@/styles/StyledDiv.css';
import { createTheme, NoSsr, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export enum Colors {
  Green = "#2a966f",
  Blue = "#20adf4",
  Orange = "#f84f39",
  Purple = "#6b66da",
}

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: Colors.Blue
      },
      secondary: {
        main: Colors.Orange
      }
    },
    typography: {
      fontFamily: 'Poppins',
    }
  })
  
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSsr>
  )
}
