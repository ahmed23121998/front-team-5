import './App.css'
import Header from './components/Header/Header'
import Aboutme from './components/Aboutme/Aboutme'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import TodoApp from './components/ToDo/ToDo'
import SignUpForm from './components/SignUp/SignUpForm'

function App() {
  return (
    <>
      {/* <Marina/> */}
      <Header/>
      <Aboutme/>
      <Skills/>
      <Portfolio/>
      <SignUpForm/>
      <TodoApp/>
      <Footer/>
      {/* <Login/> */}
      {/* <SignUp/> */}
    </>
  )
}

export default App
