import { useContext} from "react"
import { CountContext } from "./Context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/Count";


function App() {


  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Button/>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Button(){
  const setCount = useRecoilState(countAtom) 
  return <div>
    <button onClick={() => {
      setCount(count=>count-1)
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default App
