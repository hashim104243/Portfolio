import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeaderSkillsSection from "./components/HeaderSkillsSection";
import AboutMe from "./components/AboutMe";
import FunFacts from "./components/FunFacts";
import Education from "./components/Education";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Header />
      <HeaderSkillsSection />
      <AboutMe />
      <FunFacts />
      <Education />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

// https://thames-demo-nuxt.vercel.app/index-1

// Your UI looks amazing. Great work. There can be a few tweaks here and there but nothing major.

// As for your code there is still room for improvement:
// 1. You did not use alt tag with images done
// 2. Data related files should not end with jsx rather with js. Also they should be places in a different folder e.g src --> data Done
// 3. You have not used sematic tags done
// 4. There is still a lot of repeated code that you need to refactor like I had said in the meeting.
// 5. You have not created a shared layout (like we discussed in the meeting)
