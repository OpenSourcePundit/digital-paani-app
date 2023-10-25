import './App.css';
import Header from './components/header/header'
import {useData} from './context'
import RegistrationForm from './components/registrationForm/registrationForm'
import RegisteredUsersList from './components/registeredUsersList/registeredUsersList'
import EventCard from './components/event/eventCard';
import UserDetailsModal from './components/userDetailsModal/userDetailsModal';


function App() {
  const {data,isRegistrationForm,isOpenUserDetailsModal} = useData()
  return (
    <div className="App">
      <Header/>
      {isOpenUserDetailsModal.state && <UserDetailsModal {...isOpenUserDetailsModal} />}
      <EventCard/>
      {isRegistrationForm && <RegistrationForm/>}
      {data.length>0 && <RegisteredUsersList/>}
      
      
    </div>
  );
}

export default App;
