import Header from "/src/components/Header/Header.jsx"
import Footer from "/src/components/Footer/Footer.jsx"
import  {Card}  from "/src/components/Card/Card.jsx"
import Student from "./components/Props/Student.jsx"
import { Count } from "./components/Hooks/Count.jsx"
function App() {
  

  return (
    <>
      <Header/>
      <Footer />
      <Card />
      <Card />
      <Student name="Basavaraj" age="21" isStudent={true}/>
      <Student name="Virat" age="36" isStudent={false}/>
      <Count/>

    </>
  )
}

export default App
