import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import VStack from '../components/VStack'
import { useHistory } from 'react-router'
import BackHeader from '../components/BackHeader'

const Event = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const history = useHistory()

  const dummyData = [
    {
      owner: 'Mooza',
      type: 'GVG',
      date: 'Saturday, 13-11-2021',
      time: '20:30-22:00'
    },
    {
      owner: 'Mooza',
      type: 'Endless Tower',
      date: 'Friday, 22-10-2021',
      time: '20:30-22:00'
    },
    {
      owner: 'Mooza',
      type: 'Hunt',
      date: 'Thursday, 21-10-2021',
      time: '22:30-05:00'
    },
    {
      owner: 'Mooza',
      type: 'KVM',
      date: 'Thursday, 21-10-2021',
      time: '20:30-22:00'
    },
  ]

  return (
    <React.Fragment>
      <BackHeader title="Event" />
      <Screen>
        {
          dummyData.map((data, index) => {
            let typeColor
            switch (data.type) {
              case 'KVM':
                typeColor = '#418876'
                break;
              case 'GVG':
                typeColor = 'orange'
                break;
              case 'Hunt':
                typeColor = '#2EC6DC'
                break;
              case 'Endless Tower':
                typeColor = '#B03938'
                break;
              default:
                break;
            }
            return (
              <CardEvent onClick={() => history.push(`event/${index}`)}>
                <HStack justify="space-between">
                  <Text size="12px">By: {data.owner}</Text>
                  <VStack align="flex-end">
                    <Text size="10px">{data.date}</Text>
                    <Text size="9px">{data.time}</Text>
                  </VStack>
                </HStack>
                <Text size="14px" color={typeColor} bold>{data.type}</Text>
              </CardEvent>
            )
          })
        }
      </Screen>
    </React.Fragment>
  )
}

const Screen = styled.div`
  padding: 16px 34px;
`
const CardEvent = styled.div`
  width: 100%;
  height: 86px;
  background-color: #F4F4F3;
  border-radius: 20px;
  margin-bottom: 28px;
  padding: 10px;
`

export default Event
