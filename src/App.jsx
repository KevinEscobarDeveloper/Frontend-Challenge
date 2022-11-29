import './App.css'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { MainContent} from './components/MainContent'


function App() {

  return (
    <div className="App">
      <Nav/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
