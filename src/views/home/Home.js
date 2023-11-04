import React,{useState,useEffect} from "react";
import "./Home.css";
import Contactcard from './../../components/contactcard/contactcard';
import showToast from 'crunchy-toast';


function Home(){
    const [contacts,setContacts]=useState(
        [
            {
                Name:'Aniruddha Arjunkar',
                PhoneNo:7218316701,
                Email:'aniruddhaarjunkar@gamil.com'
            }
        ]
    )

    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
     
    function SaveContact(){

        if(!name || !number || !email){
           showToast('ENTER INFO PROPERLY','alert',4000);
           return;
        }

        const objarr = {
            Name:name,
            PhoneNo:number,
            Email:email
        }

        setContacts([...contacts,objarr]);

        showToast('CONTACT SAVED', 'success', 3000);

        setName('');
        setNumber('');
        setEmail('');
    }

    return(
        <div>
            <h1 className="app_title">📞CONTACT APP</h1>
            <div className="app_body">

                <div className="add_contact_container">
                    <h2 className="sec_title">📝CREATE CONTACT</h2>
                    
                 <form>
                    <input type="text" 
                    placeholder="NAME" className="user_input" 
                    onChange={(e)=>{setName(e.target.value)}}
                    value={name}>
                    </input>
                 
                    <input type="tel" 
                    placeholder="PHONE NUMBER" 
                    className="user_input"
                    onChange={(e)=>{setNumber(e.target.value)}}
                    value={number}>
                    </input>

                    <input type="email" 
                    placeholder="EMAIL ID" 
                    className="user_input"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={email}>
                    </input>

                    <button type="button" 
                    className="add_contact_button" 
                    onClick={SaveContact}>ADD CONTACT</button>
                 </form>
                </div>
              
                <div className="Saved_contact_container">
                    <h2 className="sec_title">📑SAVED CONTACTS</h2>
                      {
                        contacts.map((contact,index)=>{
                            return (<Contactcard key={index} 
                                Name={contact.Name} 
                                PhoneNo={contact.PhoneNo}  
                                email={contact.Email}/>);
                        })
                      }
                </div>
            </div>
        </div>
    );

}
export default Home;