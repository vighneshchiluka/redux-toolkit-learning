import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
       dispatch(removeCollection(item.id))
       dispatch(removeToast(item))
    }

    return (
        <div className='w-[17vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a className='h-full' target='_blank' href={item.url}>
                {item.type == 'photo' ? <img className='w-full h-full object-cover object-center' src={item.src} alt=''></img> : ''}
                {item.type == 'video' ? <video className='w-full h-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'GIF' ? <img className='w-full h-full object-cover object-center' autoPlay loop muted src={item.src}></img> : ''}
            </a>
            <div id='bottom' className='flex justify-between items-center gap-3 w-full px-4 py-6 text-white absolute bottom-0'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button onClick={() => {
                   removeFromCollection(item)
                }} className='bg-indigo-600 text-white px-3 py-1 cursor-pointer rounded font-medium'>Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard