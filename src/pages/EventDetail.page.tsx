import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import { useHistory, useParams } from 'react-router'
import BackHeader from '../components/BackHeader'

type Id = {
  id: any;
}

const EventDetail = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const asd: Id = useParams();
  const history = useHistory()
  // console.log(id)
  const data = [
    {
      title: 'GVG',
      description: (
        <React.Fragment>
          {/* <Text bold>Aliansi dengan guild Reapers dan The Pirates</Text> */}
          <Text>no description</Text>
        </React.Fragment>
      )
    },
    {
      title: 'Endless Tower',
      description: (
        <React.Fragment>
          <Text size="14px">- Lanjut yang belum lantai 80</Text>
        </React.Fragment>
      )
    },
    {
      title: 'Hunt',
      description: (
        <React.Fragment>
          <Text bold>Hunting obeanue abis kvm, sampai pagi wkwk</Text>
        </React.Fragment>
      )
    },
    {
      title: 'KVM',
      description: (
        <React.Fragment>
          <Text bottom="10px" size="20px">KVM tanggal 21 Oktober 2021</Text>
          <Text bold>yang mau ikut bisa request party ke</Text>
          <Text size="14px">- Basith</Text>
          <Text size="14px">- Kamizu</Text>
          <Text size="14px">- GoDzz--</Text>
          <Text size="14px">- Nung28</Text>
          <Text size="14px">- Nutella</Text>
        </React.Fragment>
      )
    },
  ]

  const renderData = data[asd.id]

  return (
    <Screen>
      <BackHeader title={renderData.title} />
      <EventImage src="/assets/images/et-dummy-image.png" />
      <Content>
        {renderData.description}
      </Content>
    </Screen>
  )
}

const Screen = styled.div`
  position: relative;
`
const Content = styled.div`
  padding: 16px;
`
const EventImage = styled.img`
  width: 100%;
  height: auto;
`

export default EventDetail
