import React from 'react'
import './IconBox.css'

const IconBox = (props) => {
    const {icon, text, content, link, style} = props.data
  return (
    <>

       {
         icon != '' && text != '' && style == 'left' && <div className="icon-box-wrapper">
         <div className="icon">
          <i className={`bx ${icon}`}></i>
         </div>
         <div className="content">
             {text && <p>{text}</p>}
             {content && <a href={link ? link : '#'} className="info">{content}</a>}
         </div>
        
        </div>
            
         }
       {
         icon != '' && text != '' && style == 'center' && <div className="icon-box-wrapper center-box">
         <div className="icon">
          <i className={`bx ${icon}`}></i>
         </div>
         <div className="content">
             {text && <p>{text}</p>}
             {content && <a href={link ? link : '#'} className="info">{content}</a>}
         </div>
        
        </div>
            
         }
       
      
    
    </>
  )
}

export default IconBox