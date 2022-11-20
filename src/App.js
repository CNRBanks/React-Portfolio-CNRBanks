import {useState } from 'react'
import Nav from './pages/nav';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './pages/about'
import MyWork from './pages/work';
import ContactMe from './pages/contact';


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
{pageState.about? <AboutMe />: ''}
{pageState.mywork? <MyWork />: ''}
{pageState.contact? <ContactMe />: ''}
</>
  );
}

export default App;
