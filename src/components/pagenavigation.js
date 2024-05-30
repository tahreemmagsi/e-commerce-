import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNavigation({title}) {
  return (
    <>
    <div>
        < NavLink to="/" className="text-blue-700">Home</NavLink>/{title}
    </div>
    </>
  )
}

export default PageNavigation