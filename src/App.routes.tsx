import styled from '@emotion/styled'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Text from './components/Text'
import NotFoundPage from './pages/404.page'
import Event from './pages/Event.page'
import EventDetail from './pages/EventDetail.page'
import Home from './pages/Home.page'
import Member from './pages/Member.page'
import KVMSquad from './pages/KVMSquad.page'
import RaiseGrandFleet from './pages/RaiseGrandFleet.page'


const AppRoutes = (): JSX.Element => {
  const [splashScreen, setSplashScreen] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setSplashScreen(false), 2000)
  }, [])

  return (
    <Router>
      <Container>
        {
          splashScreen ? (
            <SplashScreen>
              <RaiseWallpaper src="/assets/images/raise-bg.png" />
              <Text top="55px" size="17px" bold center>Welcome to Raise guild community</Text>
            </SplashScreen>
          ) : (
            <Switch>
              <Route path="/member" exact>
                <Member />
              </Route>
              <Route path="/kvm-squad" exact>
                <KVMSquad />
              </Route>
              <Route path="/raise-grand-fleet" exact>
                <RaiseGrandFleet />
              </Route>
              <Route path="/event" exact>
                <Event />
              </Route>
              <Route path="/event/:id" exact>
                <EventDetail />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path='*' exact component={NotFoundPage} />
            </Switch>
          )
        }
      </Container>
    </Router>
  )
}

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  background-color: white;
  width: 400px;
  height: 100vh;
  @media (max-width: 400px) {
    width: 100%;
  }
`
const SplashScreen = styled.div`
  background-color: #F1FCF9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RaiseWallpaper = styled.img`
  width: 320px;
  height: 320px;
  margin: 117px auto 0;
`

export default AppRoutes
