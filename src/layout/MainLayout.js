import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function MasterLayout() {
    return (
        <>
            <div>
                <h1>Master Layout</h1>
            </div>

            <ul>
                <Link to="category">Category</Link>
                <br/>
                <Link to="city">City</Link>
                
            </ul>

            <div>
                <Outlet/>
            </div>
        </>

    )
}
