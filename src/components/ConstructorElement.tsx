import './ConstructorElement.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { pushEquation } from '../store/ctorSlice'

interface ConstructorElementProps {}

const ConstructorElement = ({ ...props }): JSX.Element => {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.ctor.mode)

  const handleOnClick = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent && mode === 'Runtime') {
      dispatch(pushEquation(e.currentTarget.textContent))
    }
  }

  return (
    <div className="constructor-element_container">
      <button className="constructor-element_inner" onClick={(e) => handleOnClick(e)}>
        {props.children}
      </button>
    </div>
  )
}

export default ConstructorElement
