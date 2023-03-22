import {useState, useEffect} from 'react'

function GetData() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch("/ace")
    .then(res => res.json())
    .then (data => setData(data))
  }, [])
  return(
    <div>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </div>
  )
}

export default GetData;