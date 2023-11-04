import "./contactcard.css";

function Contactcard({Name,PhoneNo,email,deleteContact}){
    return(
        <div className="contact_card">
             <p className="m-2 text">🙍Name : {Name}</p>
             <p className="m-2 text">🔢Phone No. : {PhoneNo}</p>
             <p className="m-2 text">📧Email : {email}</p>
             <span className="icon_delete_contact"
             onClick={()=>{
                deleteContact(PhoneNo);
             }}>🗑️</span>
        </div>
    );
}

export default Contactcard;