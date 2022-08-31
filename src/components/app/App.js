import './App.css';
import React from "react";
import Header from "../Header/Header";
import Things from "../Things/Things";
import {According} from "../Filter/Filter"
import Context from '../context/Context';

const App = () => {

  return (
    <Context>
      <Header />

      <section className="section">
        <div className="container">
          <div className="items">
            <According />
            <Things />
          </div>
        </div>
      </section>
    </Context>
  );
}

export default App;
