import "./App.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landingPage';
function App() {
  return (
    <div>
      <LandingPage/>
      <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
}
export default App;








