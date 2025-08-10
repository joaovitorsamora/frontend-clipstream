import React, { useState } from 'react'
import { TypographyH3 } from '../../ui/Typography/TypographyH3'

interface ExpandableTextProps {
  text: string
  maxLength?: number
  className?: string
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength = 150, className }) => {
  const [expanded, setExpanded] = useState(false)

  const isLongText = text.length > maxLength
  const displayedText = expanded || !isLongText ? text : text.slice(0, maxLength) + '...'

  const toggleExpand = () => setExpanded((prev) => !prev)

  return (
    <TypographyH3 className={className}>
      {displayedText}
      {isLongText && (
        <span onClick={toggleExpand} className="ml-2 text-blue-400 cursor-pointer hover:underline text-sm">
          {expanded ? 'ver menos' : 'ver mais'}
        </span>
      )}
    </TypographyH3>
  )
}

export default ExpandableText
