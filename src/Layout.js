import React from 'react'

function Layout(props) {
  return (
    <div>
      <header style={{
        margin:"10px",
        border: '1px solid red',
      }}>
      
      여기가 항상 대가리 인데
      </header>
      {props.children}
    </div>
  )
}

export default Layout