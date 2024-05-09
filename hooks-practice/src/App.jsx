import { useEffect, useState } from 'react';
import './App.css'

function useDebounce(input, delay) {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const value = setTimeout(() => {
      setDebouncedValue(input)
    }, delay);

    return () => {
      clearTimeout(value);
    }
  },[input])

  return debouncedValue
}

function App() {
  const [input, setInput] = useState(0);
  const debouncedValue = useDebounce(input, 500)

  return (
    <div>
      Debounced value is {debouncedValue}
      <input placeholder='Type here' onChange={e => setInput(e.target.value)}/>
    </div>
  )

}



export default App
