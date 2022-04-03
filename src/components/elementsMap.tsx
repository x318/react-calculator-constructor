import ElementsBlock from './ElementsBlock'
import ConstructorElement from './ConstructorElement'
import { CalcScreen } from './CalcScreen'

export const elementsMap: Record<string, () => JSX.Element> = {
  screen: () => (
    <ElementsBlock draggableId="screen">
      <ConstructorElement>
        <CalcScreen />
      </ConstructorElement>
    </ElementsBlock>
  ),
  operations: () => (
    <ElementsBlock draggableId="operations">
      <ConstructorElement>/</ConstructorElement>
      <ConstructorElement>x</ConstructorElement>
      <ConstructorElement>-</ConstructorElement>
      <ConstructorElement>+</ConstructorElement>
    </ElementsBlock>
  ),
  numbers: () => (
    <ElementsBlock draggableId="numbers">
      <ConstructorElement>0</ConstructorElement>
      <ConstructorElement>,</ConstructorElement>
      <ConstructorElement>1</ConstructorElement>
      <ConstructorElement>2</ConstructorElement>
      <ConstructorElement>3</ConstructorElement>
      <ConstructorElement>4</ConstructorElement>
      <ConstructorElement>5</ConstructorElement>
      <ConstructorElement>6</ConstructorElement>
      <ConstructorElement>7</ConstructorElement>
      <ConstructorElement>8</ConstructorElement>
      <ConstructorElement>9</ConstructorElement>
    </ElementsBlock>
  ),
  equals: () => (
    <ElementsBlock draggableId="equals">
      <ConstructorElement>=</ConstructorElement>
    </ElementsBlock>
  ),
}
