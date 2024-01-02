import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import MasterLayout from '../layout/MasterLayout'
import Category from '../pages/master/Category'
import City from '../pages/master/City'
import Profile from '../pages/user/Profile'

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <MasterLayout />,
            children: [
                {path : 'category',element : <Category/>},
                {path : 'city',element : <City />,
                children:[{
                    path : 'lev2', element : <Category />
                }]}
            ]
        },
        {
            path: '/user',
            element: <UserLayout />,
            children: [
                {path : 'profile',element : <Profile/>},
            ]
        },
    ]
    )
}
