import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
const App = () => {
  const [data, setdata] = useState([])
  const [pages, setpages] = useState(1)
  useEffect(() => {
    const fun = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setdata(res.data)
    }
    fun()
  }, [])
  return (
    <>
      {data.slice(5 * (pages - 1), 5 * pages).map((id) => {
        return <h1>{id.id}</h1>
      })}
      {pages > 1 && <button onClick={() => setpages(pages - 1)}>prev</button>}
      {pages < Math.ceil(data.length / 5) && (
        <button onClick={() => setpages(pages + 1)}>next</button>
      )}
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
