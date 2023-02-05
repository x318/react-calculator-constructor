import './ModeSwitch.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@Store'
import { changeMode } from '@Store/constructorSlice'
import { ConstructorMode } from '@Types/store'

interface ModeSwitchProps {
  options: {
    mode: ConstructorMode
    icon: () => JSX.Element
  }[]
}

const ModeSwitch = ({ options }: ModeSwitchProps): JSX.Element => {
  const dispatch = useDispatch()
  const activeOption = useSelector((state: RootState) => state.ctor.mode)

  const handleOptionClick = (e: React.MouseEvent) => {
    const option = (e.currentTarget as HTMLElement).innerText as ConstructorMode
    dispatch(changeMode(option))
  }

  return (
    <div className="mode-switch_container">
      <div className="mode-switch_inner">
        {options.map((option, idx) => (
          <div
            className={`mode-switch_option${option.mode === activeOption ? ' active' : ''}`}
            onClick={(e) => handleOptionClick(e)}
            key={idx}
          >
            <div className="mode-switch_option-container">
              <span className="mode-switch_option_icon">{option.icon()}</span>
              <span className="mode-switch_option_text">{option.mode}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModeSwitch
