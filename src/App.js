// import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/registration';
import Users from './components/all_users';


const App = () => {
  return (
    <>
      <div>
      <Router>
            <Routes>
						<Route path="/" element={<Registration/>} />
						<Route path="/users" element={<Users/>} />
            </Routes>
				</Router>
    </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
