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
          <Member name="Basith" job="LK" />
          <Member name="Blimbing" job="WS" />
          <Member name="Nutella" job="HW" />
          <Member name="Rozes" job="Sniper" />
          <Member name="nyamukk" job="HP" />
          <Member name="GoDzz--" job="Sniper" />
          <Member name="B O S" job="LK" />
          <Member name="slegant" job="LK" />
          <Member name="Adem" job="HW" />
          <Member name="'DRAKE'" job="AC" />
          <Member name="Kitty Pryde" job="Sniper" />
          <Member name="Lucipp" job="Sniper" />
          <Member name="Mooza" job="Sniper" />
        </Squad>
        <Squad name="SQUAD #2">
          <Member name="ArArA" job="Sniper" />
          <Member name="slegant" job="LK" />
          <Member name="Kitty Pryde" job="Sniper" />
          <Member name="B O S" job="LK" />
          <Member name="Lucipp" job="Sniper" />
          <Member name="Adem" job="HW" />
          <Member name="Nung28" job="HW" />
          <Member name="Mavick" job="Sniper" />
          <Member name="Kuanyi" job="Sniper" />
          <Member name="Praetorian" job="LK" />
          <Member name="'DRAKE'" job="AC" />
          <Member name="GoDzz--" job="Sniper" />
          <Member name="Mooza" job="Sniper" />
        </Squad>
        <Squad name="SQUAD #3">
          <Member name="ArArA" job="Sniper" />
          <Member name="slegant" job="LK" />
          <Member name="Kitty Pryde" job="Sniper" />
          <Member name="B O S" job="LK" />
          <Member name="Lucipp" job="Sniper" />
          <Member name="Adem" job="HW" />
          <Member name="Nung28" job="HW" />
          <Member name="Mavick" job="Sniper" />
          <Member name="Kuanyi" job="Sniper" />
          <Member name="Praetorian" job="LK" />
          <Member name="'DRAKE'" job="AC" />
          <Member name="GoDzz--" job="Sniper" />
          <Member name="Mooza" job="Sniper" />
        </Squad>
        <Squad name="KVM 3x">
          <Member name="BookieLee" job="Sniper" />
          <Member name="sha-sha" job="Sniper" />
          <Member name="Adem" job="HW" />
          <Member name="Nung28" job="HW" />
          <Member name="Praetorian" job="LK" />
          <Member name="Mavick" job="Sniper" />
          <Member name="Kuanyi" job="Sniper" />
          <Member name="'DRAKE'" job="AC" />
          <Member name="Plat L" job="HP" />
          <Member name="archni" job="Sniper" />
          <Member name="Mooza" job="Sniper" />
        </Squad>
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
