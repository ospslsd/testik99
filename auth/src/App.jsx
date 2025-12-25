import Header from './components/header'

import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/registration'

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      {/* Главная auth-страница */}
      <Route path="/" element={<Login />} />

      {/* Регистрация */}
      <Route path="/register" element={<Register />} />

      {/* На всякий случай — редирект */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}
