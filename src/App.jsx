import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [data0, setData0] = useState([])
const [page, setPage] = useState(2)

  const getData = async()=>{
 const response =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)

 setData0(response.data)

  }
   useEffect(() => {
     getData()
   }, [page])
   
 let printData = 'no img available'

 if(data0.length>0){
  printData = data0.map(function(elem , idx){
    return <div>
      <img className="w-100 gap-2 rounded-2xl" src={elem.download_url} alt="" />
    </div>
  })
 }
  


  return (

    <div className="bg-black text-white p-4">
 
 
      <div className='flex flex-wrap gap-2 rounded-2xl'>
        {printData}
      </div>
      <div className="flex justify-around mt-5">
        <button className='bg-green-900 active:bg-black text-white px-4 rounded ' onClick={()=>{
setPage(page+1)
        }}>Prev</button>
        <button className='bg-green-900 text-white px-4 active:bg-black  rounded ' onClick={()=>{
setPage(page+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
