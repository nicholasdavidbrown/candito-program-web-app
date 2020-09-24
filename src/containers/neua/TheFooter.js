import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      {/* <div>
        <a href="https://neua.com.au" target="_blank" rel="noopener noreferrer">Nick Brown</a>
        <span className="ml-1">&copy; 2020.</span>
      </div> */}
      <div className="mfs-auto grey">
        <span className="mr-1">Created by</span>
        <a target="_blank" rel="noopener noreferrer">Nick Brown and Thomas Bradford</a>
      </div>
      {/* <div>
        <p>Created by Nick B and Tommy B</p>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
