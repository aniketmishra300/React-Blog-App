import React, { useContext } from 'react'
import { useParams ,NavLink, useNavigate } from 'react-router-dom'
import { context } from './ContextStore/Store';
import './Style/DynamicData.css'
import Footer from './Footer.js'


const DynamicData = () => {
  
    const paramId = useParams().id;
    const navigate = useNavigate()

    const [contextData] = useContext(context);
    console.log(contextData)
  return (
    <div className='Main_Container'>
        <div className='Dynamic_Data_Represent'>
          <span className='logo_avtar'>
            <span>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp' alt='not found'/>
            <p>Dec 24 , 2023</p>
            </span>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-E7rXwhE6Xb0Y-fqmf27bJhcUdB0l9dCe36jkt2DG4g8Xju9pmEZnpLx-QB_KckuOmU&usqp=CAU' alt='not found'/>
          </span>
         {contextData.filter((e)=> e.id === parseInt(paramId)).map((item,index)=>{
            return(
            <>
                {console.log(paramId)}
                <span className='mainImage' key={item.id}><img src={item.image} alt='not found'/></span>
                <div className='Dynamic_Heading' >
                  <h1>{item.name}</h1><br/>
                  <h3>{item.description}</h3>
                </div>
            </>
            )
            })}
          <button className='Back_Button' onClick={()=>{navigate(-1)}}>Back</button>
        </div>




 {/* ////////////////////////////////////////////////////// */}


          <h1 className='head2'>More About To Know</h1>
          <div className='More_About_To_Know'>
              {contextData.filter((e)=>(e.id === parseInt(paramId)+1) || (e.id === parseInt(paramId)+2) || (e.id === parseInt(paramId)+3)).map((item,index)=>{
                return(
                  <div className='Dynamic_Data' key={index}>
                    <span className='Dynamiv_Div'>
                      <NavLink to={`/Dynamic/${item.id}`}>
                      <img className='Dynamic_Data_image' src={item.image} alt='not found'/>
                      <h3 className='The_latest_heading'>{item.name}</h3>
                      </NavLink>
                      <br/>
                      <p className='The_latest_para'>{item.description.slice(0,150)}.....</p>
                    </span>
                  </div>
                )
              })}
          </div>
          



        <Footer/>
    </div>
  )
}

export default DynamicData