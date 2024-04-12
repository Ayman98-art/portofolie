import NavbarBasic from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Skilles from './components/Skilles/Skilles';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {

  return (
    <>
      <NavbarBasic />
      <Profile />
      <Projects />
      <Skilles />
      <Contact />
    </>
  )
}

export default App;