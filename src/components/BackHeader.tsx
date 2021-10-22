import styled from "@emotion/styled"
import HStack from "./HStack"
import Text from "./Text"


const BackHeader = ({
  title = "Title",
  onClick = () => {}
}) => {

  return (
    <HStack bottom="2px" height="60px" align="center" padding="0 21px" justify="space-between">
      <Icon src="/assets/images/icon-arrow-left.png" onClick={() => onClick()} />
      <Text size="17px" bold>{title}</Text>
      <EmptyIcon />
      </HStack>
  )
}

const Icon = styled.img`
  width: 24px;
  height: 24px;
`
const EmptyIcon = styled.div`
  width: 24px;
`

export default BackHeader