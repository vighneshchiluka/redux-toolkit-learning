import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {

  function getPhotos(query){
    return fetchPhotos(query)
  }

  function getVideos(query){
    return fetchVideos(query)
  }

  return (
    <div className='h-screen w-full text-white bg-gray-950'>
     {/* <button onClick={async()=>{
       const data = await getPhotos('cat')
       console.log(data.results)
     }} className='bg-gray-600 px-4 py-2 m-5'>Get Photos</button>

     <button onClick={async()=>{
       const data = await getVideos('nature')
       console.log(data.videos)
     }} className='bg-gray-600 px-4 py-2 m-5'>Get Videos</button> */}

     <SearchBar/>
     <Tabs/>
     <ResultGrid/>
    </div>
  )
}

export default App