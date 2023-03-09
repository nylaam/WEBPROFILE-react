import React from 'react';
import Utama from './Components/utama';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends React.Component {
  render(){
    return(
      <div> 
        <Navbar />
        <Utama />
        <Footer />
      </div>
    );
  }
}

export default App;