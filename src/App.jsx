import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Card from "./components/Card"
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title = "Title 1" desc = "Desc 1"/>
        <Card title = "Title 2" desc = "Desc 2"/>
        <Card title = "Title 3" desc = "Desc 3"/>
        <Card title = "Title 4" desc = "Desc 4"/>
        <Card title = "Title 5" desc = "Desc 5"/>
      </div>
      <Footer/>
    </>
  )
}
export default App
