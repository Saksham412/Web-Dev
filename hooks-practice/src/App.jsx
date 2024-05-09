import { useEffect, useState } from 'react';
import './App.css'

function useInterval() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const value = setInterval(() => {
      setCount(c=>c+1)
    },1000)

    return (
      () => clearInterval(value) //cleanup function
    )
  },[])
  return count
}

function App() {
  const count = useInterval();

  return (
    <div>
      Current time is {count}
    </div>
  )

}



export default App
