import React from 'react';
import {useData} from '../../context'


export const RegisteredUsersList = () =>{
    const {data,isOpenUserDetailsModal,setIsOpenUserDetailsModal} = useData();

    return(
        <div className="list-main-container">
            <h3 className="heading-registered-users">
                Users Already Registered:
            </h3>
            <div className="list-wrapper">
                <ul className="registered-users-list">
                    {
                        data?.map((user)=>{return(
                            <div className="single-user-card" onClick={()=>setIsOpenUserDetailsModal(true)}>
                                {user.name}
                            </div>
                        )})
                    }
                </ul>
            </div>

        </div>
    )
}

export default RegisteredUsersList ;