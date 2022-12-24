import React from 'react'
import Topbar from '../Components/Elements/Topbar'
import Sidebar from '../Components/Elements/Sidebar'

const Layout = (props) => {
  const {role, childernd, PatientMenu} = props
  return (
   <>
   <Topbar role={props.role} />
   {childernd}
   <Sidebar PatientMenu={PatientMenu} />
   </>
  )
}

export default Layout
