import "./contactcard.css";

function Contactcard({Name,PhoneNo,email,deleteContact}){
    return(
        <div className="contact_card">
             <p className="m-2 text">🙍 {Name}</p>
             <p className="m-2 text">🔢 {PhoneNo}</p>
             <p className="m-2 text">📧 {email}</p>
             <span className="icon_delete_contact"
             onClick={()=>{
                deleteContact(PhoneNo);
             }}>🗑️</span>
        </div>
    );
}

export default Contactcard;