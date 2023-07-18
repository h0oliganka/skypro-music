import React from "react";
import Bar from "./bar";
import Content from "./content";
import Nav from "./nav";
import Search from "./search";
import Sidebar from "./sidebar";

function Main() {
  <div class="wrapper">
    <div class="container">
      <main class="main">
        <Nav />
        <div class="main__centerblock centerblock">
          <Search />
          <Content />
        </div>
        <Sidebar />
      </main>
      <Bar />
      <footer class="footer"></footer>
    </div>
  </div>;
}

export default Main;
