import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedBackForm";
import About from "./pages/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from "./Components/AboutIconLink";
import {FeedbackProvider} from './Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
      <div className="App">
        <Header text="Feedback UI"/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedBackList/>
                </>
              }>
              </Route>
              <Route path='/about' element={<About/>}>This is about route</Route>
            </Routes>
          </div>
          <AboutIconLink/>
      </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
