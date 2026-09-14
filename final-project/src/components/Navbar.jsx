import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='relative flex justify-between items-center px-10 py-5 bg-(--c2)'>
            <h2 className='font-semibold text-2xl'>MediaSearch</h2>
            
               {/* Desktop Navigation */}
            <div className='hidden md:flex gap-5 items-center'>
                <Link className='text-base font-medium active:scale-95 cursor-pointer bg-(--c4) text-(--c1) px-4 py-2 rounded' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 cursor-pointer bg-(--c4) text-(--c1) px-4 py-2 rounded' to='/collection'>Collections</Link>
            </div>

             {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='md:hidden text-2xl'
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-full left-0 w-full bg-(--c2) p-5 flex flex-col gap-3 md:hidden z-50'>

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className='text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded text-center'
                        to='/'
                    >
                        Search
                    </Link>

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className='text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded text-center'
                        to='/collection'
                    >
                        Collections
                    </Link>

                </div>
            )}

        </div>
    )
}


export default Navbar