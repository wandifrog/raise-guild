import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import HStack from '../components/HStack'
import VStack from '../components/VStack'
import LinkButton from '../components/ButtonLink'
import RaiseFancyHeader from '../components/RaiseFancyHeader'
import { useHistory } from "react-router"
import BackHeader from '../components/BackHeader'

const Setoran = (): JSX.Element => {

  React.useEffect(() => {
  }, [])

  return (
    <Screen>
      <BackHeader title="Setoran" />
      <Content>
        <Text>- Great Earth</Text>
        <Text>- Flame Heart</Text>
        <Text>- Rough Wind</Text>
        <Text>- Mystic Frozen</Text>
        {/* <Text>- Glue</Text> */}
        <Text>- Venom</Text>
        <Text>- Broken Arrow</Text>
        <Text>- Alcohol</Text>
        <Text>- Butterfly Wing Powder</Text>
        <Text>- Hammer</Text>
        <Text>- Test Tube</Text>
        <Text>- Silica Sand</Text>
        <Text>- Whetstone</Text>
        <Text>- Branch of Yggdrasil</Text>
        <Text>- Dropan NPC Geffen</Text>
        <Text>- Dropan NPC GH</Text>
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

export default Setoran
