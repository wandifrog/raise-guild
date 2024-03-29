import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'

const KVMSquad = (): JSX.Element => {

  return (
    <React.Fragment>
      <BackHeader title="KVM Squad" />
      <Screen>
        <Squad name="SQUAD #1">
          <Member name="Blimbing" job="WS" />
          <Member name="Kinu" job="WS" />
          <Member name="nyamukk" job="HP" />
          <Member name="AggisErnie" job="HP" />
          <Member name="Nutella" job="HW" />
          <Member name="kunyitsayur" job="AC" />
          <Member name="GoDzz--" job="Sniper" />
          <Member name="Rozes" job="Sniper" />
          <Member name="BOS" job="LK" />
        </Squad>
        <Squad name="SQUAD #2">
          <Member name="keyaru" job="HP" />
          <Member name="Nung28" job="HW" />
          <Member name="N a m a" job="Sniper" />
          <Member name="Septiyand48" job="Sniper" />
          <Member name="Basith" job="LK" />
        </Squad>
        {/* <Squad name="KVM 3x">
          <Member name="BookieLee" job="Sniper" />
          <Member name="Cascade" job="WS" />
          <Member name="Ragsire" job="WS" />
          <Member name="MerinXVII" job="WS" />

          <Member name="Sean Han" job="AC" />
          <Member name="Dealova" job="AC" />
          <Member name="Rogue" job="AC" />
          <Member name="Wild15" job="AC" />
          <Member name="Lark" job="AC" />
          <Member name="Shiroilnuu" job="AC" />
          <Member name="Trinity7" job="AC" />
          <Member name="Eya Lulaby" job="AC" />
          <Member name="OG" job="AC" />
          <Member name="VINATAN" job="HW" />
          <Member name="falina" job="HW" />
          <Member name="Archni" job="Sniper" />
          <Member name="Mavick" job="Sniper" />
          <Member name="soun" job="Sniper" />
          <Member name="bad cops" job="Sniper" />
          <Member name="Ryud0" job="Sniper" />
          <Member name="mayes" job="Sniper" />
          <Member name="Demelza" job="Sniper" />
          <Member name="Riza" job="Sniper" />
          <Member name="Daddyshyshy" job="Sniper" />
          <Member name="Kamizu" job="HP" />
          <Member name="Kai_Arulin" job="HP" />
          <Member name="Houshou" job="HP" />
          <Member name="Praetorian" job="LK" />
          <Member name="Luigi" job="LK" />
          <Member name="Maragideyne" job="LK" />
          <Member name="Mooza" job="Sniper" />
        </Squad> */}
        <Text top="150px" size="10px" bold>Develop with <span style={{ color: 'red' }}>♥</span> by Wandi</Text>
      </Screen>
    </React.Fragment>
  )
}

type SquadTypes = {
  children: React.ReactNode;
  name: String
}

const Card = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f5f4;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-bottom: 15px;
`

const Squad = ({
  name = '',
  children
}: SquadTypes) => {

  return (
    <Card>
      <Text size="32px" bold alignRight>{name}</Text>
      {children}
    </Card>
  )
}

const Member = ({
  name = '',
  job = 'sniper'
}) => {
  let color
  let jobName
  switch (job) {
    case 'Sniper':
      color = '#388E3C'
      jobName = 'Sniper'
      break;
    case 'HW':
      color = '#1565C0'
      jobName = 'High Wizzard'
      break;
    case 'WS':
      color = '#00838F'
      jobName = 'White Smith'
      break;
    case 'LK':
      color = 'red'
      jobName = 'Lord Knight'
      break;
    case 'HP':
      color = '#F57F17'
      jobName = 'High Priest'
      break;
    case 'AC':
      color = 'purple'
      jobName = 'Assassin Cross'
      break;
    default:
      color = 'initial'
      jobName = 'Novice'
      break;
  }

  return (
    <HStack>
      <Text>{name}</Text>
      <div style={{ padding: '1px', backgroundColor: '#d4e6df', borderRadius: '6px', marginLeft: '5px', height: '17px' }}>
        <Text size="10px" color={color} bold>{jobName}</Text>
      </div>
    </HStack>
  )
}

const Screen = styled.div`
  position: relative;
  padding: 12px 4px 4px;
  overflow: scroll;
  height: calc(100vh - 60px);
`

export default KVMSquad
