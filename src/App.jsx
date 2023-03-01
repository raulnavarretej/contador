import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>contador</h3>
      <hr />
      <h1>{count}</h1>

      <button onClick={() =>{
        setCount(count + 1);
      }}
      type="button"
      className='btn btn-secondary' >+1</button>

      <button onClick={() =>{
        setCount(count - 1);
      }}
      type="button"
      className='btn btn-warning' >-1</button>

      <button onClick={() =>{
        setCount(0);
      }}
      type="button"
      className='btn btn-danger' >0</button>
    </div>
  )
  
}

export default App