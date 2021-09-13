import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NoticeBar from './components/NoticeBar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Router>
      <section className='body-content'>
        <NoticeBar />
        <main>
          <Header />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
        </main>
      </section>
    </Router>
  );
}

export default App;
