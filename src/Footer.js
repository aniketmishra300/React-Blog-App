import React from 'react'
import './Style/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer_Box_First'>
            <span className='Footer_Siren'>
                <h4 className='The'>The</h4>
                <h1 className='siren'>Siren</h1>
            </span>
            <br/>
            <hr/>
            <br/>
            <h2>Contact No. : +91 7800802528</h2>
            <h3>Email : aniketmishra300@gmail.com</h3>
            <h3>Add - Deoria , Uttar Pradesh</h3>
            <span className='nav_logo'>
                <img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' alt='not Found'/>
                <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt='not Found'/>
                <img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt='not Found'/>
            </span>

        </div>
        <div className='Footer_Box_Second'>
            <h1>Know More</h1>
            <br/>
            <hr/>
            <br/>
            <p>"This Site is Created For the Blogging Purpose.
                Which helpful in collecting some data/information of
                our society, state & country. Thank You For Visiting Us.  "
            </p>
        </div>
        <div className='Footer_Box_Third'>
            <h1>Quick Links</h1>
            <br/>
            <hr/>
            <br/>
            <span className='Quick_links'>
                <ul type='none'>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/'>Home</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/Bollywood'>Bollywood</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/Hollywood'>Hollywood</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/Fitness'>Fitness</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/Technology'>Technology</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/Food'>Food</NavLink></li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default Footer