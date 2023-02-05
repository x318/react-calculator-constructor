import './ElementsArea.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@Store'
import { elementsMap } from './elementsMap'

import { ConstructorElement } from '@Types/store'

interface ElementsAreaProps {}

const ElementsArea = ({}: ElementsAreaProps): JSX.Element => {
  const initialElements: ConstructorElement[] = ['screen', 'operations', 'numbers', 'equals']
  const elements = useSelector((state: RootState) => state.elements.elements)
  useEffect(() => {}, [elements])

  return (
    <div className="elements-area_container">
      <div className="elements-area_inner">
        {initialElements.map((el, idx) => (
          <div
            key={idx}
            className={`elements-area_block elements-area_block__${el}${!elements.includes(el) ? ' disabled' : ''}`}
          >
            {elementsMap[el]()}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ElementsArea
