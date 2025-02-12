import Header from "./Components/Header"
import Main from "./Components/Main"
import { DataProvider } from "./Context/DataContext"

export default function App(){

  return (
    
    <DataProvider>
      <Header/>
      <Main/>
    </DataProvider>
  )
}