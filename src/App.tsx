import { EyeOutline, CodeOutline } from 'react-ionicons'
import ModeSwitch from '@Components/ModeSwitch'
import ConstructorArea from '@Components/ConstructorArea'
import ElementsArea from '@Components/ElementsArea'
import './main.scss'

function App() {
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
