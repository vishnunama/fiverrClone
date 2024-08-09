import logo from './logo.svg';
import './App.css';
import PaymentPage from './Component/PaymentPage';
import PopUp from './Component/PopUp';
import PaymentMethods from './Component/PopUp';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <PaymentPage/>

    </div>
  );
}

export default App;
