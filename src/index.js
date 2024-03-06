import React from "react"
import ReactDOM from "react-dom/client"
import Dashboard from "./pages/Dashboard/index"
import reportWebVitals from "./reportWebVitals"
import GlobalStyle from "./styles/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import { NavBarProvider } from "./context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <NavBarProvider>
        <NavBar />
        <Header />
      </NavBarProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
