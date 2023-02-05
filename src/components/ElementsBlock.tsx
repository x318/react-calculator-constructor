import './ElementsBlock.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@Store'
import { removeElement } from '@Store/constructorSlice'
import { addElement } from '@Store/elementsSlice'

interface ElementsBlockProps {}

const ElementsBlock = ({ ...props }): JSX.Element => {
  const mode = useSelector((state: RootState) => state.ctor.mode)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent) => {
    if (mode === 'Constructor') {
      dispatch(removeElement(props.draggableId))
      dispatch(addElement(props.draggableId))
    }
  }

  const handleDragStart = (e: React.DragEvent) => {
    if (mode === 'Constructor') {
      e.dataTransfer.setData('text/plain', props.draggableId)
      return
    }
    e.preventDefault()
  }

  return (
    <div className="elements-block_container">
      <div
        className="elements-block_inner"
        onDoubleClick={(e) => handleClick(e)}
        onDragStart={(e) => handleDragStart(e)}
      >
        {props.children}
      </div>
    </div>
  )
}

export default ElementsBlock
