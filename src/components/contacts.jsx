import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './contact.module.css'

function Contact({ name, number, onDelete }) {
    return (
        <div>

            <div className={s.contactContainer}>
                <p><HiUser size="24" /> {name}</p>
            
                <p><BsFillTelephoneFill size="24" /> {number}</p>
            </div>

            <button className={s.btnContactDelete} type="button" onSubmit={onDelete}>Delete</button>


        </div>
    )
}


export default Contact;