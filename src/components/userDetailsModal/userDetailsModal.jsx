import React from 'react'
import { useData } from '../../context'
import './userDetailsModal.css'

const UserDetailsModal = ({userNumber}) =>{
    const {data,setIsOpenUserDetailsModal} = useData();
    const foundUser = data.find((user)=>user?.number===userNumber)


    return(
        <div className="modal-bg" onClick={()=>setIsOpenUserDetailsModal({userNumber:'',state:false})}>
            <div className="modal-body" onClick={(e)=>e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{foundUser?.name}</h3>
                    <button onClick={()=>setIsOpenUserDetailsModal({userNumber:'',state:false})}>X</button>
                </div>
                <div className="modal-content">
                   <p>E-mail: {foundUser?.email}</p>
                   <p>Phone Number: {foundUser?.number}</p>
                   <p>Bio: {foundUser?.bio}</p>
                   <p>Registered on: {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "long",
                    timeStyle: "short",
                  }).format(Date.parse(foundUser?.registerDate))}</p>

                </div>
            </div>
        </div>
    )
}
export default UserDetailsModal;