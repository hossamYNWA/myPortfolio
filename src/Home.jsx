import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/skills/Skills.jsx";
import TabsSection from "./components/Tabs/Tabs.jsx";
import Footer from "./components/Footer/Footer.jsx";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      <Skills />
      <TabsSection />
      <Footer />
    </main>
  );
}
