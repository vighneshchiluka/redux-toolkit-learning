import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)

    const dispatch = useDispatch()

    const clearAll = (item) => {
        dispatch(clearCollection(item))
    }

    return (
        <div className='overflow-auto px-10 py-6'>
            {collection.length > 0 ? <div className='flex justify-between mb-6'>
                <h2 className='text-2xl font-medium'>Your Collection</h2>
                <button onClick={() => {
                    clearAll()
                }} className='active:scale-95 cursor-pointer transition bg-red-600 px-8 py-2 rounded text-lg font-medium'>Clear Collection</button>
            </div> : <h2 className='text-5xl font-medium text-center py-10 text-gray-300'>Collection is Empty</h2>}

            <div className='flex flex-wrap justify-start gap-6'>
                {collection.map((item, idx) => {
                    return <div key={idx}>
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CollectionPage