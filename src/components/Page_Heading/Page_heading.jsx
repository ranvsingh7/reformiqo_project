import React from 'react'
import './Page_heading.scss'

const Page_heading = ({parent,child}) => {
  return (
    <div className='page_heading'><span className='heading_parent'>{parent} /</span> {child.charAt(0).toUpperCase() + child.slice(1)}</div>
  )
}

export default Page_heading