import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer} from 'react-toastify';

const App = () => {

  // function getPhotos(query){
  //   return fetchPhotos(query)
  // }

  // function getVideos(query){
  //   return fetchVideos(query)
  // }

  return (
    <div className='w-full min-h-screen text-white bg-gray-950'>
      {/* <button onClick={async()=>{
       const data = await getPhotos('cat')
       console.log(data.results)
     }} className='bg-gray-600 px-4 py-2 m-5'>Get Photos</button>

     <button onClick={async()=>{
       const data = await getVideos('nature')
       console.log(data.videos)
     }} className='bg-gray-600 px-4 py-2 m-5'>Get Videos</button> */}

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App