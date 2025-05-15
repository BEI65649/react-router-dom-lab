import { useState } from "react";
import { useNavigate } from "react-router"; 

const MailboxForm = ({ addBox }) => { 
  const [mailbox, setMailbox] = useState({
        _id:0, boxSize:"Small", boxOwner: ""
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        setMailbox({...mailbox, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(mailbox);
        setMailbox({_id:0, boxSize:"", boxOwner: ""});
        navigate('/mailboxes');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Box Owner:
           
                <input 
                    type="text"
                    name="boxOwner"
                    value={mailbox.boxOwner} 
                    onChange={handleChange} 
                    required 
                />
            
            </label>
            <label>
                Box Size:
                <select
                name="boxSize"
                    value={mailbox.boxSize} 
                    onChange={handleChange} 
                    required>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
               </select> 
            </label>
            <button type="submit">Add Mailbox</button>
        </form>

    )
};

export default MailboxForm;