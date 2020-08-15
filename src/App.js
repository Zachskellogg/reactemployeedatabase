import React from "react";
import Emp from "./pages/Emp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Emp />
      </Wrapper>
      <Footer />
    </div>
  );
}


export default App;
