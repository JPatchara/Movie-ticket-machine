import Header from "./Header"
import React from "react"

const App = ({children}) =>
  <main>
    <Header/>
    {children}
  </main>

export default App
