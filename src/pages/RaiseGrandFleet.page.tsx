import React, { Children } from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { Link } from 'react-router-dom'
import VStack from '../components/VStack'
import LinkButton from '../components/ButtonLink'

const RaiseGrandFleet = (): JSX.Element => {
  
  return (
    <Screen>
      <BackHeader title={'Raise Grand Fleet'} />
      <VStack align="center">
        <Text>Raise . Mooza</Text>
        <Text>Reapers . Potatoe</Text>
        <Text>The Pirates . Joria</Text>
      </VStack>
    </Screen>
  )
}

const Screen = styled.div`
  height: calc(100% - 135px);
  width: 100%;
`

export default RaiseGrandFleet
