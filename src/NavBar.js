import React, { useState } from 'react'
import { BrowserRouter, Routes , Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Technology from './Technology'
import Food from './Food'
import './App.css'
// import './Style/NavBar.css'
import Store from './ContextStore/Store'
import DynamicData from './DynamicData'

const NavBar = () => {

    const [isClick , setIsClick] = useState(true)
    const [className, setClassName] =useState('Nav')

    const Change = ()=>{
        if(isClick)
        {
            setClassName("ResponsiveNav")
            setIsClick(!isClick)
        }
        else{
            setClassName('Nav')
            setIsClick(!isClick)
        }
    }


  return (
    <div>
        
        
        <BrowserRouter>
        <div className='NavTop'>
            <span className='TheSiren'>
                <h4 className='the'>The</h4>
                <h1 className='siren'>Siren</h1>
            </span>
            <img className='Hamburger' onClick={Change}  src='https://cdn-icons-png.flaticon.com/128/6015/6015685.png' alt='not found'/>
            <nav className='Navbar'>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/'>Home</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/Bollywood'>Bollywood</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/Hollywood'>Hollywood</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/Fitness'>Fitness</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/Technology'>Technology</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "Green"})} to='/Food'>Food</NavLink>
            </nav>
            <hr/>
            <span className= {className}>
                <ul type='none'>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/'>Home</NavLink></li>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/Bollywood'>Bollywood</NavLink></li>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/Hollywood'>Hollywood</NavLink></li>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/Fitness'>Fitness</NavLink></li>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/Technology'>Technology</NavLink></li>
                    <li><NavLink onClick={Change} style={({isActive}) => ({color : isActive ? "blue" : "green"})} to='/Food'>Food</NavLink></li>
                </ul>
            </span>
            </div>
        <Store>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Bollywood' element={<Bollywood/>}/>
                <Route path='/Hollywood' element={<Hollywood/>}/>
                <Route path='/Fitness' element={<Fitness/>}/>
                <Route path='/Technology' element={<Technology/>}/>
                <Route path='/Food' element={<Food/>}/>
                <Route path='/Dynamic/:id' element={<DynamicData/>}/>
            </Routes>
        </Store>
        </BrowserRouter>
    </div>
  )
}

export default NavBar