// import React from "react";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhatsAppButton from "./components/WhatsAppButton";
import Pixel from "./components/Pixel"; // 👈 novo

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Pixel /> {/* 👈 inicializa o Pixel */}
      <Header />
      {/* <Hero /> */}
      <Categories />
      <WhatsAppButton />
    </div>
  );
}

export default App;
