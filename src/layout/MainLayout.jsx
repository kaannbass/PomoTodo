import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import backgroundImage from '../assets/BackgroundImages/JapaneBackground.png';

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center mx-auto"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header theme={theme} setTheme={setTheme} />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
