import './App.css';

import Header from './components/header';
import Nav from './components/nav';
import Hero from './components/hero';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
