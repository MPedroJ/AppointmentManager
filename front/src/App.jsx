import Home from './views/Home/Home'
import Header from './components/Header/Header'
import MisTurnos from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import Famous from './views/Famous/Famous'
import About from './views/About/About'
import { Routes, Route } from "react-router-dom"
import ScheduleAppointment from './views/ScheduleAppointment/ScheduleAppointment'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointments' element={<MisTurnos />} />
        <Route path='/famous' element={<Famous />} />
        <Route path='/about' element={<About/>} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/appointments/schedule' element={<ScheduleAppointment />}/>
      </Routes>
    </div>
  )
}

export default App