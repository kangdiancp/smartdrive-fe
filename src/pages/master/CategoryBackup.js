import React, { useEffect, useState } from 'react'
import apiCategory from '../../api/apiCategory';

export default function Category() {

  const [category,setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //phase componentDidMount, hanya di execute satu kali 
  //pada saat component atau function category pertama kali di call sama
  // menu disidebar

  // ()=> anonymous function, 1 kali execute
  useEffect(()=>{
    apiCategory.list().then(data =>{
        setCategory(data);
    })
  },[]); // use empty array agar bisa di excute 1 kali



  return (
    <div>
      <h1>Category</h1>
      <table>
        <thead>
          <th>CategoryID</th>
          <th>CategoryName</th>
          <th>Description</th>
        </thead>
        <tbody>
          {
            
            (category || []).map(cate =>(
                <tr>
                  <td>{cate.categoryId}</td>
                  <td>{cate.categoryName}</td>
                  <td>{cate.description}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
