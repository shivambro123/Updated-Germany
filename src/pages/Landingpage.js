import React from "react";
import Hero from "../components/Hero/Hero";
import ScrollSpy from "react-ui-scrollspy";
import Testimonal from "../components/Testimonal/Testimonal";
import Header from "../components/Header/Header";
import Freecounselling from "../components/FreeCouselling/Freecounselling";
import NavbarComp from "../components/common/Navbar/Navbarcomp";

const Landingpage = () => {
  return (
    <>
      <Header />
      <NavbarComp />
      <ScrollSpy>
        <Hero />
        <Testimonal />
        <Freecounselling/>
        {/* <Hero />   */}
      </ScrollSpy>
    </>
  );
};

export default Landingpage;
