import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  const [state, dispatch] = useApp()
  return (
    <Screen>
      <div>
      <Link to="/member">member</Link>

      </div>
      <Link to="/event">event</Link>
    </Screen>
  )
}

const Screen = styled.div`
  height: calc(100% - 135px);
  width: 100%;
`

export default Home
