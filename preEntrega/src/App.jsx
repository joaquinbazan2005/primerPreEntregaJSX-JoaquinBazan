import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  return (
    
<>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/productos"} element={<ItemListContainer />} />
      <Route path={"/categoria/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} /> 
    </Routes>
  </BrowserRouter>
</>

  )
}

export default App