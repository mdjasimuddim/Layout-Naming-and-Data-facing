import React from 'react'

const page = ({searchParams}) => {
  return (
    <div>
        <h3>{searchParams.name}</h3>
        <h1>This is our Woman Product Page</h1>
    </div>
  )
}

export default page