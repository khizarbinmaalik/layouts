import React from 'react'

const AboutPage = async () => {
  await new Promise((resolve, reject) => (
    setTimeout(() => {
      resolve(true)
    }, 5000)
  )) // Simulate data fetching delay
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
    </>
  )
}

export default AboutPage