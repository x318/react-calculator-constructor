import './ConstructorArea.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageOutline } from 'react-ionicons'

import { RootState } from '@Store'
import { addElement } from '@Store/constructorSlice'
import { removeElement } from '@Store/elementsSlice'
import { elementsMap } from '@Components/elementsMap'

import { ConstructorElement } from '@Types/store'

interface ConstructorAreaProps {}

const ConstructorArea = ({}: ConstructorAreaProps): JSX.Element => {
  const dispatch = useDispatch()
  const elements = useSelector((state: RootState) => state.ctor.elements)
  const isEmpty = elements.length === 0
  const [isDragOver, setIsDragOver] = useState<boolean>(false)

  const handleDragEnter = (e: React.DragEvent) => {
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    setIsDragOver(false)
    const element = e.dataTransfer.getData('text/plain') as ConstructorElement
    dispatch(addElement(element))
    dispatch(removeElement(element))
  }

  return (
    <div className="constructor-area_container">
      <div
        className={`constructor-area_inner${isDragOver ? ' drag-over' : ''}${isEmpty ? ' empty' : ''}`}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {isEmpty && (
          <div className="constructor-area_text">
            <ImageOutline />
            <h3>Перетащите сюда</h3>
            <p>любой элемент из левой панели</p>
          </div>
        )}

        {elements.map((el, idx) => (
          <div key={idx} className={`elements-area_block elements-area_block__${el}`}>
            {elementsMap[el]()}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConstructorArea
