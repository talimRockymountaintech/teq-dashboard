import React from 'react'
import Sidebar from './Sidebar'
import DashBoard from './DashBoard'

const Layout = () => {
  return (
    <div className="w-full min-h-screen p-4  bg-primary-foreground ">
      <div className="grid grid-cols-12 gap-4">
        {/* left Form */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4  rounded-lg">
          <Sidebar />
        </div>

        {/* Dashboard Right */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 rounded-lg">
          <DashBoard />
        </div>
      </div>
    </div>
  )
}

export default Layout