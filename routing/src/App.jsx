import { useContext, useState } from "react"
import { CountContext } from "./Context";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Button setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Button({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count-11)
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
  </div>
}

export default App
