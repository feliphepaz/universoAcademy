import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Account from "./Components/Account/Account";
import More from "./Components/More";
import FAQ from "./Components/FAQ";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./UserContext";

function animeScroll() {
  const target = document.querySelectorAll("[data-anime]");
  const animationClass = "animate";
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else if (element.classList.contains(animationClass)) {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

window.addEventListener("scroll", animeScroll);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="conta" element={<Account />} />
              <Route path="sobre" element={<More />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
