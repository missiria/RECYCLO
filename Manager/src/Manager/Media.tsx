import React from 'react'
import SVG from 'react-inlinesvg'

export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname

type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const EDGE_SVG: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px'}) => {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {EDGE_SVG}