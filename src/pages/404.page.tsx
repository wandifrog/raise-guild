import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { Link } from 'react-router-dom'
import VStack from '../components/VStack'

const NotFoundPage = (): JSX.Element => {
  const [state, dispatch] = useApp()
  return (
    <Screen>
      <VStack>
        <Text center>
          404 not found
        </Text>
        <Link to="/">back to homepage</Link>
      </VStack>
    </Screen>
  )
}

const Screen = styled.div`
  height: calc(100% - 135px);
  width: 100%;
`

export default NotFoundPage
