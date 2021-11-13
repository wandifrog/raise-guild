import React, { Children } from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { Link } from 'react-router-dom'
import VStack from '../components/VStack'
import LinkButton from '../components/ButtonLink'
import RaiseFancyHeader from '../components/RaiseFancyHeader'

const Home = (): JSX.Element => {
  const [state, dispatch] = useApp()
  
  const handleAsd = () => {
    alert(1)
  } 
  
  return (
    <Screen>
      <VStack align="center">
        <RaiseFancyHeader />
        <Text>Open registration for new ninja</Text>
        <Text>Lvl 40++, guild order min 40/week,</Text>
        <Text>log in every day, and kvm min 3x</Text>
        <Text top="20px">if you are interested</Text>
        <HStack align="center">
          <Text
            size="15px"
            color="#2ec6dc"
            bold
            onClick={() => handleAsd()}
          >
            Contact
          </Text>
          <Text left="5px">our Hokage</Text>
        </HStack>

        <Text top="30px"> </Text>

        <LinkButton to="/event">
          Event
        </LinkButton>
        <LinkButton to="/kvm-squad">
          KVM Squad
        </LinkButton>
        <LinkButton to="/raise-grand-fleet">
          Raise Grand Fleet
        </LinkButton>
      </VStack>
    </Screen>
  )
}

const Screen = styled.div`
  height: calc(100% - 135px);
  width: 100%;
  padding-top: 25px;
`

export default Home
