import React from 'react'
import Bar from './bar'
import Content from './content'
import Nav from './nav'
import Search from './search'
import Sidebar from './sidebar'

function Main() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <div className="main__centerblock centerblock">
            <Search />
            <Content />
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default Main
