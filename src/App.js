import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import InformationComponent from './components/InformationComponent';

import TeamComponent from './components/TeamComponent';
import Footer from './components/Footer';
import NewProduct from './components/deneme/index';

function App() {
  return (
    <>
       <Header />
      <Category />
      <InformationComponent />
      <NewProduct />
      <TeamComponent />

      <Footer />

    </>
  );
}

export default App;
