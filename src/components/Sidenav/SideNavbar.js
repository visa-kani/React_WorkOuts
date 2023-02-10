
import React from "react";
import { NavLink } from "react-router-dom";
const SidebarExample = ({children}) => {

    const menuitem = [
        {
          path: "/",
          name:'Home'
        },
        {
          path: "/about",
          name:'About'

        },
        {
            path:"/contact",      
            name:'Contact'

        },
        {
          path:'/img',
          name:'Image'
        },
        {
          path: "/profile",
          name:'Profile'
        },
        {
          path: "/products",
          name:'Products'
        }
      ];
      


  return (
    <div className="container-fluid hello">
      <div className="design">
       {
menuitem.map((item,index)=>(
  <NavLink to={item.path} key={index} className='link' activeclassName='active'>
    <div className="hello">{item.name}</div>
  </NavLink>
))
        }</div>
    <main>{children}</main>
    </div>
  );
}
export default SidebarExample;