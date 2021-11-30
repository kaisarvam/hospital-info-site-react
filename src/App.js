
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllContext from './Contexts/AllContext';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import AboutUs from './Components/AboutUs/AboutUs';
import Faq from './Components/Faq/Faq';
import NotFound from './Components/NotFound/NotFound';
import HospitalDetail from './Components/HospitalDetail/HospitalDetail';




function App() {
  return (
    <div className="App">
      <AllContext>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route  path="/faq">
            <Faq></Faq>
          </Route>
          

          <Route  path="/Signup">
            <SignUp></SignUp>
          </Route>

          <PrivateRoute  path="/hospital/:hospitalName">
            <HospitalDetail></HospitalDetail>
          </PrivateRoute>
          

          <PrivateRoute path="/services/:serviceId" >
          <Services></Services>
            </PrivateRoute>

            
            <Route  path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
 <Footer></Footer>
      </BrowserRouter>
      </AllContext>
    </div>
  );
}

export default App;
