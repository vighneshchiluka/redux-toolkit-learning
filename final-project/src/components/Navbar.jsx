import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-5 bg-(--c2)'>
            <h2 className='font-semibold text-2xl'>MediaSearch</h2>
            <div className='flex gap-5 items-center'>
                <Link className='text-base font-medium active:scale-95 cursor-pointer bg-(--c4) text-(--c1) px-4 py-2 rounded' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 cursor-pointer bg-(--c4) text-(--c1) px-4 py-2 rounded' to='/collection'>Collections</Link>
            </div>
        </div>
    )
}

export default Navbar