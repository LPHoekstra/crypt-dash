import React from "react"
import ReactDOM from "react-dom/client"
import Dashboard from "./pages/Dashboard/index"
import reportWebVitals from "./reportWebVitals"
import GlobalStyle from "./styles/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import { ConnectedProvider, NavBarProvider } from "./context"
import Login from "./components/Login"
import Setting from "./pages/Setting"
import Signup from "./pages/Signup"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <ConnectedProvider>
        <NavBarProvider>
          <NavBar />
          <Header />
        </NavBarProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </ConnectedProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
