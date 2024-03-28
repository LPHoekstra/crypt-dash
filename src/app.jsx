import styled from "styled-components"
import NavBar from "./components/Navbar"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from "./pages/Dashboard"
import Login from "./components/Login"
import Setting from "./pages/Setting"
import Signup from "./pages/Signup"
import { ActualisationProvider } from "./context"

const Div = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`

const RouteContenair = styled.div`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <Div>
      <Router>
        <ActualisationProvider>
          <NavBar />
          <RouteContenair>
            <Header />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </RouteContenair>
        </ActualisationProvider>
      </Router>
    </Div>
  )
}

export default App
