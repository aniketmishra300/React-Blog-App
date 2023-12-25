import React, { useContext } from 'react'
import { context } from './ContextStore/Store'
import './App.css'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'



const Home = () => {

  const [contextData] = useContext(context)
  console.log(contextData)
  return (
    <>
      <div className='top'>
          {contextData.filter((e)=>e.category === "Bollywood1").map((item,index)=>{
          return(
              <div className='fisrt' key={item.id}>
                <img className="img1"src={item.image} alt='not found'/>
                <div className='second'>
                  {contextData.filter((e)=>e.category === "Small1").map((item,index)=>{
                    return(
                      <>
                      <span className='mainSmallImage'>
                        <img src={item.image} alt='not found'/>
                        </span>
                      </>
                    )
                  })}
                </div>
              </div>
              )  
            })}
      </div>

      {/* /////////////////////// the latest ////////////////////////// */}
          
          <h1 className='latest_head'>The Latest</h1>
          <div className='The_Latest'>
              {contextData.filter((e)=>e.category=== "The_latest").map((item,index)=>{
                return(
                  <div className='LatestHoriz' key={index}>
                    <span className='The_latest_Post'>
                      <NavLink to={`/Dynamic/${item.id}`}>
                      <img className='The_latest_image' src={item.image} alt='not found'/>
                      <h3 className='The_latest_heading'>{item.name}</h3>
                      </NavLink>
                      <br/>
                      <p className='The_latest_para'>{item.description.slice(0,150)}.....</p>
                    </span>
                  </div>
                )
              })}
          </div>

          {/* //////////////////////////////// Top Stories////////////////////////// */}

          <h1 className='Top_posts'>Top Posts</h1>
          <h1 className='Top_stories'>Top Stories</h1>
          <div className='Second_div'>
            <div className='Top_stories_Section'>
               {contextData.filter((e)=>e.id % 8 === 0).map((item,index)=>{
                return(
                  <div key={item.index}>
                      <div className='k'>
                          <NavLink to={`/Dynamic/${item.id}`}>
                            <img className='Top_Story_images' src={item.image} alt='not found'/>
                          </NavLink>
                          <div>
                          <NavLink to={`/Dynamic/${item.id}`}>
                            <h2 className='_name_attribure'>{item.name}</h2>
                            </NavLink>
                            <br/>
                            <p>{item.description.slice(0,125)}....</p>
                            <h3>{item.category} : {item.date}</h3>
                          </div>
                      </div>
                  </div>
                )
               })}
            </div>

            {/* ////////////////////////TOP POSTS ///////////////// */}
          
            <div className='Top_Posts_Section'>
                  {contextData.filter((e)=>e.category === "Top").map((item,index)=>{
                    {console.log(item.name)}
                   return(
                    <>
                      <div key={item.index} className='Top_post_Series'>
                          <NavLink to={`/Dynamic/${item.id}`}>
                            <img className='Top_Post_images' src={item.image} alt='not found'/>
                            <br/>
                            <h3>{item.name}</h3>
                            <br/>
                          </NavLink>
                      <hr className='horixontal_for_top'/>
                          <h1>{item.number}</h1>
                      </div>
                    </>
                   )
                  })}
                   <div>
                   {contextData.filter((e)=>e.category === "Advertisement").map((item,index)=>{
                    return(
                      <div className='advertise'>
                        <h1 className='advertise_pannel'>Advertisement pannel</h1>
                      <img src={item.image} alt='not found'/>
                    </div>
                    )
                   })}
                    </div>
               </div>
            </div>
          
         

          <Footer/>
    </>
    
  )
}

export default Home