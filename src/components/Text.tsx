import React from 'react'
import * as CSS from 'csstype'
import { ComponentMetrics } from '../types/Component'

type TextProps = ComponentMetrics & React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode | string;
  /**
   * Font weight
   */
  bold?: boolean;
  /**
   * Text align center
   */
  center?: boolean;
  /**
   * On click event
   */
  onClick?: () => void;
  /**
   * Font family
   */
  font?: string;
  /**
   * Font style italic
   */
  italic?: boolean;
  /**
   * Font size
   */
  size?: CSS.Property.FontSize;
  /**
   * Span element
   */
  span?: boolean;
}

/**
 * Text component.
 * @example
 * <Text>Hello world</Text>
 * <Text top="5px">Nakama</Text>
 * <Text size="14px" color="cadetblue" center>Mulai aja dulu</Text>
 */
const Text = ({
  children,
  top,
  right,
  bottom,
  left,
  bold = false,
  center = false,
  color = '#000000',
  font,
  italic = false,
  onClick,
  size = '15px',
  span = false,
  ...props
}: TextProps): JSX.Element => {

  const textStyle: React.CSSProperties = {
    color,
    cursor: onClick ? 'pointer' : undefined,
    fontFamily: bold ? 'Poppins-SemiBold' : 'Poppins-Regular',
    fontSize: size,
    fontStyle: italic ? 'italic' : 'normal',
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right,
    marginTop: top,
    textAlign: center ? 'center' : undefined,
    userSelect: onClick ? 'none' : 'initial',
  }

  return React.createElement(
    span ? 'span' : 'div',
    {
      onClick: () => onClick && onClick(),
      style: textStyle,
      ...props,
    },
    children
  )
}

export default Text
