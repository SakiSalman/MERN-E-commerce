import React from 'react'
import './SBannars.css'

const SBannarStyle01 = ({children, bcgImg}) => {
  return (
    <>

        <div style={{backgroundImage : `url(${bcgImg})`}} className="s-bannar-wrapper ">
           {
            children
           }
        </div>

    </>
  )
}

export default SBannarStyle01