import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';

function App() {
  let [search, setSearch] = useState([])

  return (
    <>
     <Main search={search} setSearch={setSearch}/>
    </>
  );
}

export default App;
