import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos','videos','GIPHY']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=> state.search.activeTab)


  return (
    <div className='flex gap-5 p-10 justify-center'>
      {tabs.map(function(elem,idx){
        return <button onClick={()=>{
            dispatch(setActiveTabs(elem))
        }} className={` ${(activeTab===elem?'bg-blue-700':'bg-gray-500')} transition px-5 py-2 cursor-pointer active:scale-95 rounded uppercase`} key={idx}>{elem}</button>
      })}
    </div>
  )
}

export default Tabs
