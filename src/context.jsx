import {createContext,useContext,useEffect,useState} from 'react'

const Context = createContext();

const DataProvider = ({children}) =>{
    
    const [data,setData] = useState([]);
    const [isOpenUserDetailsModal,setIsOpenUserDetailsModal] = useState({userNumber:'',state:false})
    const [isRegistrationForm,setIsRegistrationForm] = useState(true)
    useEffect(()=>{
        let regUsers = JSON?.parse(localStorage?.getItem('regUsers'))
        console.log("reguser:",regUsers)
    
    if(regUsers!==null){
        setData(regUsers?.participants)
    }
    else{
        setData([])
    }
    },[])
    

    return(
        <Context.Provider value = {{data,setData,isOpenUserDetailsModal,setIsOpenUserDetailsModal,isRegistrationForm,setIsRegistrationForm}}>
            {children}
        </Context.Provider>
    )
}

export const useData = () => useContext(Context)
export {DataProvider}