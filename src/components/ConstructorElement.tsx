import './ConstructorElement.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@Store'
import { pushEquation } from '@Store/constructorSlice'
import { ConstructorMode } from '@Types/store'

interface ConstructorElementProps {
  children: React.ReactNode
}

const ConstructorElement = ({ ...props }: ConstructorElementProps): JSX.Element => {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.ctor.mode)

  const handleOnClick = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent && mode === 'Runtime') {
      dispatch(pushEquation(e.currentTarget.textContent))
    }
  }

  return (
    <div className="constructor-element_container">
      <button
        className={`constructor-element_inner${mode !== 'Runtime' ? ' disabled' : ''}`}
        onClick={(e) => handleOnClick(e)}
      >
        {props.children}
      </button>
    </div>
  )
}

export default ConstructorElement
