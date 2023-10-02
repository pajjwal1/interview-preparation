import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from '../About'
import SearchBar from '../SearchBar'
import DropDowns from '../DropDowns'
import Pagination from '../Pagination'
import TodoList from '../TodoList'
import Error from './Error'
import ReduxPractise from '../Redux/ReduxPractise'


const Routing = () => {
  return (
    <div style={{textAlign:"center", margin: "10px"}}>
        <nav>
            <NavLink style={{paddingRight:"10px"}} to='/' > About </NavLink>
            <NavLink style={{paddingRight:"10px"}} to='/search' > Search </NavLink>
            <NavLink style={{paddingRight:"10px"}} to='/dropdown' > DropDowns </NavLink>
            <NavLink style={{paddingRight:"10px"}} to='/pagination' > Pagination </NavLink>
            <NavLink style={{paddingRight:"10px"}} to='/todo' > Todo </NavLink>
            <NavLink style={{paddingRight:"10px"}} to='/redux' > Redux </NavLink>
        </nav>
        <Routes>
        <Route path="/" Component={About}/>
        <Route path="/search" Component={SearchBar}/>
        <Route path="/dropdown" Component={DropDowns}/>
        <Route path="/pagination" Component={Pagination}/>
        <Route path="/todo" Component={TodoList}/>
        <Route path="/redux" Component={ReduxPractise}/>
        <Route path="*" Component={Error} />
      </Routes>
    </div>
  )
}

export default Routing