import logo from './logo.svg';
import './App.css';
import './index.css';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import { breadcrumbItems } from './fakeDB';
import DashBoard from './components/DashBoard';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Breadcrumb items={breadcrumbItems}/>
      <Layout/>
    </div>
  );
}

export default App;
