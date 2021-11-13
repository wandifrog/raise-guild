import styled from "@emotion/styled"
import { useHistory } from "react-router"
import HStack from "./HStack"
import Text from "./Text"

type BackHeaderTypes = {
  title?: string;
  onClick?: () => void;
}

const BackHeader = ({
  title = "Title",
  onClick
}: BackHeaderTypes) => {
  const history = useHistory()
  
  const handleBack = () => {
    if (onClick === undefined) {
      return history.goBack()
    } else {
      return onClick
    }
  }

  return (
    <HStack bottom="12px" height="60px" align="center" padding="0 28px" justify="space-between">
      <Icon src="/assets/images/icon-arrow-left.png" onClick={() => handleBack()} />
      <Text size="17px" bold>{title}</Text>
      <EmptyIcon />
    </HStack>
  )
}

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
const EmptyIcon = styled.div`
  width: 24px;
`

export default BackHeader