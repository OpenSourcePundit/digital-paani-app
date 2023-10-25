import React from 'react'
import { useData } from '../../context'
import './userDetailsModal.css'

const UserDetailsModal = () =>{
    const {data,setIsOpenUserDetailsModal} = useData();


    return(
        <div className="modal-bg" onClick={()=>setIsOpenUserDetailsModal(false)}>
            <div className="modal-body" onClick={(e)=>e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{data[0]?.name}</h3>
                    <button onClick={()=>setIsOpenUserDetailsModal(false)}>X</button>
                </div>
                <div className="modal-content">
                   <p>E-mail: {data[0]?.email}</p>
                   <p>Phone Number: {data[0]?.number}</p>
                   <p>Bio: {data[0]?.bio}</p>

                </div>
            </div>
        </div>
    )
}
export default UserDetailsModal;