import { useState } from 'react'

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const up = (index) => {
    var temp = arr[index]
    arr[index] = arr[index - 1]
    arr[index - 1] = temp
    setArr([...arr])
  }
  const down = (index) => {
    var temp = arr[index]
    arr[index] = arr[index + 1]
    arr[index + 1] = temp
    setArr([...arr])
  }
  return (
    <div>
      {arr.map((ele, index) => (
        <div key={index}>
          {ele}{' '}
          {index > 0 && (
            <button
              onClick={() => {
                up(index)
              }}
            >
              up
            </button>
          )}
          {index < arr.length - 1 && (
            <button
              onClick={() => {
                down(index)
              }}
            >
              down
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
export default App
