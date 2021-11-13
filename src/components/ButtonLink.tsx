import React from 'react'
import { useHistory } from 'react-router'
import { ComponentMetrics } from '../types/Component';
import Text from './Text'


type LinkButtonTypes = ComponentMetrics & {
  children: React.ReactChild;
  to: string;
  params?: any
}

const LinkButton = ({
  children,
  top,
  to = '',
}: LinkButtonTypes): JSX.Element => {
  const history = useHistory()

  return (
    <Text
      size="14px"
      color="#2ec6dc"
      bold
      top={top}
      onClick={() => history.push(to)}
    >
      {children}
    </Text>
  )
}

export default LinkButton
