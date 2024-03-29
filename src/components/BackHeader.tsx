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
  
  console.log(history)
  const handleBack = () => {
    if (history.length === 1 || history.length === 2) {
      return history.push('/')
    }
    if (onClick === undefined) {
      return history.goBack()
    } else {
      return onClick
    }
  }

  return (
    <HStack height="60px" align="center" padding="0 22px" justify="space-between">
      <Icon src="/assets/images/icon-arrow-left.png" onClick={() => handleBack()} />
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