import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import NoticeBar from './components/NoticeBar';
import BirthRegistrationScreen from './screens/BirthRegistrationScreen';
import ComplainRegistrationScreen from './screens/ComplainRegistrationScreen';
import DeathRegistrationScreen from './screens/DeathRegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MarriageRegistrationScreen from './screens/MarriageRegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SupportScreen from './screens/SupportScreen';

function App() {
  return (
    <Router>
      <section className='body-content'>
        <NoticeBar />
        <main>
          <Header />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/support' component={SupportScreen} exact />
          <Route
            path='/birth-registration'
            component={BirthRegistrationScreen}
            exact
          />
          <Route
            path='/death-registration'
            component={DeathRegistrationScreen}
            exact
          />
          <Route
            path='/marriage-registration'
            component={MarriageRegistrationScreen}
            exact
          />
          <Route
            path='/complain-registration'
            component={ComplainRegistrationScreen}
            exact
          />
        </main>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
