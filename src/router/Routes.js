import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import MasterLayout from '../layout/MasterLayout'
import Category from '../pages/master/Category'
import City from '../pages/master/City'
import Profile from '../pages/user/Profile'
import AddCategory from '../pages/master/AddCategory'
import EditCategory from '../pages/master/EditCategory'

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <MasterLayout />,
            children: [
                {path : 'category',element : <Category/>},
                {path : 'category/add',element : <AddCategory />},
                {path : 'category/edit',element : <EditCategory />}
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
