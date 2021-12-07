import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import InformationComponent from './components/InformationComponent';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header/>
      <Category/>
      <InformationComponent/>
      <Product/>
    </>
  );
}

export default App;
