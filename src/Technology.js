import React, {useContext}from 'react'
import { context } from './ContextStore/Store'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Technology = () => {
  const [contextData] = useContext(context)
  return (
    <div className='All'>
      <div>
      <h1 className='Top_posts'>Top Posts</h1>
          <h1 className='Top_stories'>Top Stories</h1>
          <div className='Second_div'>
            <div className='Top_stories_Section'>
               {contextData.filter((e)=>e.category === "Technology").map((item,index)=>{
                return(
                  <div>
                      <div className='k'>
                          <NavLink to={`/Dynamic/${item.id}`}>
                            <img className='Top_Story_images' src={item.image} alt='not found'/>
                          </NavLink>
                          <div>
                          <NavLink to={`/Dynamic/${item.id}`}>
                            <h2 className='_name_attribure'>{item.name}</h2>
                            </NavLink>
                            <br/>
                            <p>{item.description.slice(0,150)}....</p>
                          </div>
                      </div>
                  </div>
                )
               })}
            </div>
            
            {/* ////////////////////////TOP POSTS ///////////////// */}
            
            <div className='Top_Posts_Section'>
                        {contextData.filter((e)=>e.category === "Top tech").map((item,index)=>{
                          // {console.log(item.name)}
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
                        {contextData.filter((e)=>e.category === "Advertisement2").map((item,index)=>{
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
         
</div>





      <Footer/>
    </div>
  )
}

export default Technology