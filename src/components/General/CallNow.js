import React from 'react'

function CallNow({number}) {
  return (
    <>
     <a className='call-link' href={number}>call now</a>
    </>
  )
}

export default CallNow