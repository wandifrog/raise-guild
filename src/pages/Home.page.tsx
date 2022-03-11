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
        {/* <RaiseFancyHeader /> */}
        <HStack bottom={'120px'}>
          <RaiseWallpaper src="/assets/images/raise-logo.png" />
          <VStack left={'22px'}>
            <Text bold size={'19px'}>Raise</Text>
            <Text>lvl 5</Text>
            <Text>74/75</Text>
          </VStack>
        </HStack>
        <Text>Open registration for new ninja</Text>
        <Text>Lvl 40++, guild order min 56/week,</Text>
        <Text>log in every day</Text>
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
        <LinkButton top="18px" to="/setoran">
          Setoran
        </LinkButton>
        <LinkButton top="18px" to="/reward-go">
          Reward Guild Order (gajian)
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
const RaiseWallpaper = styled.img`
  width: 75px;
  height: 75px;
`

export default Home
