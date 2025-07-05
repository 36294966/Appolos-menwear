import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout';
import Home from './Pages/home';

import TwoPieceSuits from './Components/Suits/2piecesuits';
import ThreePieceSuits from './Components/Suits/3piecesuits';
import Tuxedo from './Components/Suits/tuxedo';

import Belt from './Components/Accessories/belt';
import Socks from './Components/Accessories/socks';
import Ties from './Components/Accessories/ties';

import Cassual from './Components/Shirts/cassualshirts'; 
import Official from './Components/Shirts/officialshirts'; 

import Leather from './Components/Leather/leather'; 
import Jeans from './Components/Jeans/jeans';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suits/2piecesuits" element={<TwoPieceSuits />} />
          <Route path="/suits/3piecesuits" element={<ThreePieceSuits />} />
          <Route path="/suits/tuxedo" element={<Tuxedo />} />
          <Route path="/accessories/belt" element={<Belt />} />
          <Route path="/accessories/socks" element={<Socks />} />
          <Route path="/accessories/ties" element={<Ties />} />
          <Route path="/shirts/cassual" element={<Cassual />} />
          <Route path="/shirts/official" element={<Official />} />
          <Route path="/jackets/leather" element={<Leather />}/>
          <Route path="/jeans" element={<Jeans />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


















