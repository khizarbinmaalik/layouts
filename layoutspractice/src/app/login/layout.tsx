import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">Welcome to My Layout from the Login Page</h3>
      {children}
    </div>
  )
}

export default Layout