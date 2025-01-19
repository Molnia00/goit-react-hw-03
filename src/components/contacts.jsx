import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';


function Contact({ name, number }) {
    return (
        <div>

            <div>
                <p><HiUser size="24" /> {name}</p>
            
                <p><BsFillTelephoneFill size="24" /> {number}</p>
            </div>

            <button type="button">Delete</button>


        </div>
    )
}


export default Contact;