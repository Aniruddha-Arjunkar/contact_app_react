import "./contactcard.css";
function Contactcard({Name,PhoneNo,email}){
    return(
        <div className="contact_card">
             <p className="m-2 text">🙍Name : {Name}</p>
             <p className="m-2 text">🔢Phone No. : {PhoneNo}</p>
             <p className="m-2 text">📧Email : {email}</p>  
        </div>
    );
}

export default Contactcard;