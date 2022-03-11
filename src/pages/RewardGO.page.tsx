import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import HStack from '../components/HStack'
import VStack from '../components/VStack'
import LinkButton from '../components/ButtonLink'
import RaiseFancyHeader from '../components/RaiseFancyHeader'
import { useHistory } from "react-router"
import BackHeader from '../components/BackHeader'

const RewardGO = (): JSX.Element => {

  React.useEffect(() => {
  }, [])

  return (
    <Screen>
      <BackHeader title="Reward GO" />
      <Content>
        <Text>Guild Order 56/week = 1x</Text>
        <Text>56++ = 0.04x</Text>
        <Text>Contoh GO 84/week</Text>
        <Text>84-56=28</Text>
        <Text>28x4=112</Text>
        <Text>112*100%=1.12</Text>
        <Text>Total 1x + 1.1x = 2.1x</Text>
        <Text>1x bisa dituker</Text>
        <Text>- 10 Adv Axe</Text>
        <Text>- 2 Adv Tungsten</Text>
        <Text>- 90 Panacea</Text>
        <Text>- 20 Yggdrasil Berry</Text>
        <br />
        <Text>Bisa ditabung</Text>
        <Text>Diambil tiap hari Minggu jam 7 malam</Text>
        {/* <pre style={{whiteSpace: 'pre-wrap'}}>
          Addy 7.2x
          AnakMas
          Angeloo 3.8x
          ArArA
          archni 2.1x
          Arktm 2.5x
          BADOCX
          Barbobo 3.8x
          Basith 2.2x
          BigMom
          cartaz
          CAVEIN 1.6x
          dunno
          Elitemiko 0.8x
          FREGILE || Maragideyne 6.6x
          GAMBIL 0.6x
          Gatsby 1.1x
          godz 5.5x
          hafiza 3.1x
          Hanzel 0.8x
          HinaChan 3.7x
          iamyours
          jr pam 8.1x
          kazama 1.6x
          khikhi 8.4x
          kitty 4.4x
          kureaks
          liked 2x
          luigi 4x
          madu 0.8x
          mayes 1.2x
          mek2 0.8x
          nung
          nutella 3.8x
          praetorian
          ragsire 3.4x
          reyzodiac 7.5x
          riza 1.2x
          rogue 2.4x
          sacredhero 16x
          sanji 3.5x
          shasha 0.4x
          wild15 0.5x
          yoshiano 0.5x
        </pre> */}
      </Content>
    </Screen>
  )
}

const Screen = styled.div`
  height: calc(100% - 135px);
  width: 100%;
`
const Content = styled.div`
  padding: 10px 20px;
`

export default RewardGO
