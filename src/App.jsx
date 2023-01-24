import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import "./styles.css"

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenido!" />
    </>
  )
}

export default App
