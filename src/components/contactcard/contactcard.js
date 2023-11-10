import "./contactcard.css";

function Contactcard({Name,PhoneNo,email,deleteContact,enableEdting,index}){
    return(
        <div className="contact_card">
             <p className="m-2 text">🙍 {Name}</p>
             <p className="m-2 text">🔢 {PhoneNo}</p>
             <p className="m-2 text">📧 {email}</p>
             <span className="icon_delete_contact"
             onClick={()=>{
                deleteContact(PhoneNo);
             }}>🗑️</span>
             <span className="icon_edit_contact"
             onClick={()=>{
                enableEdting(index);
             }}>🖊️</span>
        </div>
    );
}

export default Contactcard;