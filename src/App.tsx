import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from './components/Container'
import Header from './components/Header'
// import ControlPanel from './components/ControlPanel'
import routes from './routes'
import { MUI_THEME } from './styles/muiTheme'
import Main from './components/Main'

const queryClient = new QueryClient()

const App: React.FC = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <Route exact path={path} component={component} key={key} />
  ))
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MUI_THEME}>
        <div className="App">
          <main>
            <BrowserRouter>
              <Header />
              <Container>
                <Main>
                  {/* <ControlPanel /> */}
                  <Switch>{routeComponents}</Switch>
                </Main>
              </Container>
            </BrowserRouter>
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
