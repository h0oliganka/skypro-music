import React from 'react'
import { Bar } from '../barFolder/bar'
import { Content } from '../contentFolder/content'
import { Nav } from '../navFolder/nav'
import { Search } from '../searchFolder/search'
import { Sidebar } from '../sidebarFolder/sidebar'

export function Main({ loading }) {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <div className="main__centerblock centerblock">
            <Search />
            <Content loading={loading} />
          </div>
          <Sidebar loading={loading} />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}
