import {useState } from 'react'
import Nav from './pages/nav';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './pages/about'
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';
import Footer from './pages/footer'


function App() {
  const [pageState, setPageState] = useState({
      about: false,
      work: true,
      contact: false
  })
  return (
  <>
<CssBaseline />
<Nav pageState={pageState} setPageState={setPageState} />
{pageState.work? <MyWork />: ''}
{pageState.about? <AboutMe />: ''}
{pageState.contact? <Contact />: ''}
<Footer />
</>
  );
}

export default App;
