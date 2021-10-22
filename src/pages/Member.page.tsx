import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/Text'
import useApp from '../hooks/App.hook'
import HStack from '../components/HStack'
import BackHeader from '../components/BackHeader'
import { useHistory } from 'react-router'

const Member = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const history = useHistory()

  return (
    <Screen>
      {/* <BackHeader title="Member" onClick={() => history.goBack()} /> */}
      <Text size="16px" bold>IGN - No kontak WA</Text>
      <Text>Adem - 08127865596</Text>
      <Text>Basith - 082129581919</Text>
      <Text>Blimbing - 0895358823129</Text>
      <Text>Bob Duke - 089615453231</Text>
      <Text>Bonaa - 087887856910</Text>
      <Text>DRAKE - 081221182199</Text>
      <Text>FryingPan - 08812341606</Text>
      <Text>GoDzz-- - 081356091014</Text>
      <Text>Kamizu - 08127227480</Text>
      <Text>Kitty Pryde - 082156753831</Text>
      <Text>Lucipp - 08571712782</Text>
      <Text>Luigi || AAAA - 08953131544</Text>
      <Text>Nutella - 085156240330</Text>
      <Text>Plat L - 085731587200</Text>
      <Text>Praetorian - 081380085700</Text>
      <Text>sha-sha - 081376432248</Text>
      <Text>Shiroilnuu - 081578975328</Text>
      <Text>slegant - 08978380421</Text>
      <Text>soun - 08113051136</Text>
      <Text>Dealova - 085157069961</Text>
      <Text>VINATAN - 082144133519</Text>
      <Text>Zevanya || Rozes - 081347263975</Text>
    </Screen>
  )
}

const Screen = styled.div`
  position: relative;
  padding: 16px;
`

export default Member
