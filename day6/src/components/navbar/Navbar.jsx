import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({user,login, logout}) {
    return (
        <div style={{display:"flex", justifyContent:'space-around', alignItems:"center" , border:"1px solid black" }}>
            <div className="left">
                <Link to={'/'}>
                    <div className="logo font-bold text-2xl text-white text-center">
                        Protected Route
                    </div>
                </Link>
            </div>
            <div className="right">
                <ul style={{display:"flex", justifyContent:"space-between", gap:"20px" , alignItems:"center"}}>
                    <Link to={'/'}>
                        <li className='cursor-pointer font-medium'>Home</li>
                    </Link>
                    <Link to={'/product'}>
                        <li className='cursor-pointer font-medium'>Product</li>
                    </Link>
                    <Link to={'/dashboard'}>
                        <li className='cursor-pointer font-medium'>Dashboard</li>
                    </Link>
                    {user ? 

                    <li onClick={logout} style={{cursor:"pointer", backgroundColor:"red", width:"80px",height:"27px", border:" 1px solid black", borderRadius:"5px",paddingLeft:"22px"}}>
                        Logout
                    </li>
                    :

                    <li onClick={login} style={{cursor:"pointer", backgroundColor:"green", width:"80px",height:"27px", border:" 1px solid black", borderRadius:"5px",paddingLeft:"22px"}}>
                        Login
                    </li>
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar