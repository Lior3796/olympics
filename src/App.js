import './App.css';
import Container from './Features/Components/Container/Container';
import Modal from './Features/Components/Modal/Modal';
import React,{useState,useEffect} from 'react';

function App() {
  const [showModal,setShowModal] = useState(false);

  return (
    <div className="App">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Container />
    </div>
  );
}

export default App;
