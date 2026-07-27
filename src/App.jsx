import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [data0, setData0] = useState([])


  const getData = async()=>{
 const response =  await axios.get("https://picsum.photos/v2/list?page=2&limit=30")

 setData0(response.data)

  }
 let printData = 'no img available'

 if(data0.length>0){
  printData = data0.map(function(elem , idx){
    return <div>
      <img className="w-100 gap-2 rounded-2xl" src={elem.download_url} alt="" />
    </div>
  })
 }
   getData()

  return (
    <div className="bg-black text-white p-4">
 
 
      <div className='flex flex-wrap gap-2 rounded-2xl'>
        {printData}
      </div>
      
    </div>
  )
}

export default App
