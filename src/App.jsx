import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-red-500 text-4xl bg-blue-500'>
      Hello Vite + React!
    </div>
  )
}

export default App
