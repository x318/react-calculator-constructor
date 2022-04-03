import { EyeOutline, CodeOutline } from 'react-ionicons'
import ModeSwitch from './components/ModeSwitch'
import ConstructorArea from './components/ConstructorArea'
import ElementsArea from './components/ElementsArea'

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <div className="app-center">
        <div className="app-left">
          <ElementsArea />
        </div>
        <div className="app-right">
          <ModeSwitch
            options={[
              { mode: 'Runtime', icon: () => <EyeOutline /> },
              { mode: 'Constructor', icon: () => <CodeOutline /> },
            ]}
          />
          <ConstructorArea />
        </div>
      </div>
    </div>
  )
}

export default App
