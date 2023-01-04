import './App.scss'
import { Route, HashRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <HashRouter>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
    </HashRouter>
    </>
  ) 
}

export default App;
