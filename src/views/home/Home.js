import React,{useState,useEffect} from "react";
import "./Home.css";
import Contactcard from './../../components/contactcard/contactcard';
import showToast from 'crunchy-toast';


function Home(){
    const [contacts,setContacts]=useState(            //VARIABLE TO SAVE CONTACT
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
    const [isEditEnable,setIsEditEnble] = useState(false);
    const [indexToEdit,setIndexToEdit] = useState(-1);
     
    function SaveContact(){                                   // SAVE CONTACT FUNCTION

        if(!name || !number || !email){                        //INPUT FIELD SHOULD NOT BE EMPTY
           showToast('EMPTY TEXT FIELD ','alert',4000);
           return; 
        }

        const objarr = {                                      //CREATING A NEW OBJECT
            Name:name,
            PhoneNo:number,
            Email:email
        }

        const newcontacts = [...contacts,objarr];
        setContacts(newcontacts);

        saveToLocalStorage(newcontacts);

        showToast('CONTACT SAVED', 'success', 3000);

        setName('');
        setNumber('');
        setEmail('');
    }

    function deleteContact(mobileNumber){                      //DELETE CONTACT FUNTION
        let indexToDelete = -1;
        contacts.forEach((contactDetails,index)=>{
            if(contactDetails.PhoneNo == mobileNumber){
                indexToDelete = index;
            }
        })

         contacts.splice(indexToDelete, 1);
          setContacts([...contacts]);
          saveToLocalStorage(contacts);
          
        showToast('CONTACT DELETED SUCCESSFILLY','success',4000);
    }
    
    function saveToLocalStorage(contactData){                             //SAVIND DATA IN LOCAL STORAGE
        localStorage.setItem('contact',JSON.stringify(contactData));
    }

    function loadFromLocalStorage(){                                      //RETRIVING DATA FROM LOCAL STORAGE
        const dataToLoad = JSON.parse(localStorage.getItem('contact'));
        if(dataToLoad){
            setContacts(dataToLoad);
        }
    }

function enableEdting(index){                            //THIS FUNCTION WILL CALLED ON ONCLICK EVENT OF EDIT BUTTON 
                                                         // IN CARD AND SHOW CONTACT DETAILS IN INPUT BOX
        const contactdetails = contacts[index];
        setName(contactdetails.Name);
        setNumber(contactdetails.PhoneNo);
        setEmail(contactdetails.Email);

        setIsEditEnble(true);
        setIndexToEdit(index);

    }

function EditContact(){            //THIS FUNTION CALLED ON ONCKICK EVENT OF 'SAVE CHANGES'                                 // BUTTON TO EDIT CONTACT DETAILS IN CARD AND LOCAL STORAGE
    const obj = {
        Name:name,
        PhoneNo:number,
        Email:email
    }

    contacts[indexToEdit] = obj;

    setContacts([...contacts]);

    saveToLocalStorage(contacts);

    showToast('CONTACT EDITED SUCCESSFULLY','success',3000);

    setName('');
    setNumber('');
    setEmail('');

    setIsEditEnble(false);
}

    useEffect(()=>{
        loadFromLocalStorage();
    },[])

    return(
        <div>
            <h1 className="app_title">📞CONTACT APP</h1>
            <div className="app_body">

                <div className="add_contact_container">
                    <h2 className="sec_title">
                        {
                            isEditEnable ? '🖊️ EDIT CONTACT' : '📝CREATE CONTACT'
                        }</h2>

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
                    onClick={()=>{
                        isEditEnable ? EditContact() : SaveContact();
                    }
                    }>
                        {
                            isEditEnable ? '  SAVE CHANGES  ' : 'ADD TO CONTACT'
                        }</button>
                 </form>
                </div>
              
                <div className="Saved_contact_container">
                    <h2 className="sec_title">📑SAVED CONTACTS</h2>        
                      {
                        contacts.map((contact,index)=>{
                            return (<Contactcard 
                                key={index} 
                                Name={contact.Name} 
                                PhoneNo={contact.PhoneNo}  
                                email={contact.Email}
                                deleteContact={deleteContact}
                                enableEdting={enableEdting}
                                index={index}/>);
                        })
                      }
                </div>
            </div>
        </div>
    );

}
export default Home;