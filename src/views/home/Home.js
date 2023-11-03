import React,{useState,useEffect} from "react";
import "./Home.css";
import Contactcard from './../../components/contactcard/contactcard'

function Home(){
    const [contacts,setContact]=useState(
        [
            {
                Name:'Aniruddha Arjunkar',
                PhoneNo:7218316701,
                Email:'aniruddhaarjunkar@gamil.com'
            },
            {
                Name:'Aniket Warhate',
                PhoneNo:5698721464,
                Email:'aniketwarhate@gmail.com'
            },
            {
                Name:'Prajwal Dhande',
                PhoneNo:8694512563,
                Email:'prajwaldhande@gmail.com'
            }
        ]
    )
    return(
        <div>
            <h1 className="app_title">📞CONTACT APP</h1>
            <div className="app_body">
                <div className="Saved_contact_container">
                      {
                        contacts.map((contact,index)=>{
                            return (<Contactcard key={index} Name={contact.Name} PhoneNo={contact.PhoneNo}  email={contact.Email}/>);
                        })
                      }
                </div>
                <div className="add_contact_container">

                    
                </div>
            </div>
        </div>
    );

}
export default Home;