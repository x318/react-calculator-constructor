import { useSelector } from 'react-redux'

import { RootState } from '@Store'

export const CalcScreen = (): JSX.Element => {
  const equation = useSelector((state: RootState) => state.ctor.equation)

  return <input type="text" value={equation || '0'} readOnly={true} />
}
