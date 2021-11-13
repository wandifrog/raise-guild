import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { useHistory } from 'react-router'
import VStack from '../components/VStack'

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
            <Member name="'DRAKE'" job="AC" />
            <Member name="Praetorian" job="LK" />
            <Member name="Mooza" job="Sniper" />
          </Squad>
          <Squad name="KVM 3x">
            <Member name="BookieLee" job="Sniper" />
            <Member name="sha-sha" job="sniper" />
            <Member name="Adem" job="HW" />
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
      color = 'green'
      jobName = 'Sniper'
      break;
    case 'HW':
      color = 'blue'
      jobName = 'High Wizzard'
      break;
    case 'WS':
      color = 'teal'
      jobName = 'White Smith'
      break;
    case 'LK':
      color = 'red'
      jobName = 'Lord Knight'
      break;
    case 'HP':
      color = 'orange'
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
      <div style={{ padding: '4px', backgroundColor: '#d4e6df', borderRadius: '2px' }}>
        <Text size="10px" left="6px" color={color} bold>{jobName}</Text>
      </div>
    </HStack>
  )
}

const Screen = styled.div`
  position: relative;
  padding: 0 4px;
  overflow: scroll;
  height: auto;
`

export default KVMSquad
