import './App.css';
import Header from './components/header/header'
import {useData} from './context'
import RegistrationForm from './components/registrationForm/registrationForm'
import UserDetailsModal from './components/userDetailsModal/userDetailsModal'
import RegisteredUsersList from './components/registeredUsersList/registeredUsersList'
import EventCard from './components/event/eventCard';

function App() {
  const {data,isOpenUserDetailsModal,isRegistrationForm} = useData()
  return (
    <div className="App">
      <Header/>
      <EventCard/>
      {isRegistrationForm && <RegistrationForm/>}
      {data.length>0 && <RegisteredUsersList/>}
      {isOpenUserDetailsModal && <UserDetailsModal/>}
      
    </div>
  );
}

export default App;
