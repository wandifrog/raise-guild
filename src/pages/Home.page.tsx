import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import HStack from '../components/HStack'
import VStack from '../components/VStack'
import LinkButton from '../components/ButtonLink'
import RaiseFancyHeader from '../components/RaiseFancyHeader'
import { useHistory } from "react-router"

const Home = (): JSX.Element => {
  const history = useHistory()

  const _handleWhatsapp = () => {
    const text = `halo kk Mooz, mau join guildnya dong. IGN ku xxxxx`
    window.open(`https://wa.me/628161325941?text=${text}`)
  }

  React.useEffect(() => {
    console.log(history)
    window.history.replaceState(null, '', "/");
  }, [])
  
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
            onClick={() => _handleWhatsapp()}
          >
            Contact
          </Text>
          <Text left="5px">our Hokage</Text>
        </HStack>

        <Text top="50px"> </Text>

        <LinkButton to="/event">
          Event
        </LinkButton>
        <LinkButton top="18px" to="/kvm-squad">
          KVM Squad
        </LinkButton>
        <LinkButton top="18px" to="/raise-grand-fleet">
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
