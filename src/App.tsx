import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Footer } from './components/Footer'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
