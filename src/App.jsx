import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/Styles.module.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Write from './pages/WriteDiary';
import Goal from './pages/WriteGoals';
import WriteGoals from './pages/Goal';
import MyPage from './pages/MyPage';
import SelectGoal from './pages/SelectGoal';
import NavBar from './components/NavBar';
import LogoutPopUp from './components/LogOutCheckPopUp';
import DetailDiary from './pages/DetailDiary';
function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/navBar' element={<NavBar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/write-diary' element={<Write />} />
          <Route path='/write-goal' element={<Goal />} />
          <Route path='/goal' element={<WriteGoals />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/select' element={<SelectGoal />} />
          <Route path='/popup' element={<LogoutPopUp />} />
          <Route path='/detail' element={<DetailDiary />} />
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
