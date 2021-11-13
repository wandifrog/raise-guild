import React from 'react'
import { useHistory } from 'react-router'
import Text from './Text'


type LinkButtonTypes = {
  children: React.ReactChild;
  to: string;
  params?: any
}

const LinkButton = ({
  children,
  to = ''
}: LinkButtonTypes): JSX.Element => {
  const history = useHistory()

  return (
    <Text
      size="14px"
      color="#2ec6dc"
      bold
      onClick={() => history.push(to)}
    >
      {children}
    </Text>
  )
}

export default LinkButton
