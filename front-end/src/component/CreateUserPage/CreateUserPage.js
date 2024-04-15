import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUser, existsByEmail} from "../../common/services/UserService";

export function CreateUserPage() {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });
    const [emailExists, setEmailExists] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    const handleChange = async (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'email') {
            try {
                const response = await existsByEmail(value);
                setEmailExists(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        if (name === 'email' || name === 'name' || name === 'password') {
            setIsFormValid(formData.email && formData.name && formData.password);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailExists) {
            alert('Email already exists')
            return;
        }

        if (!isFormValid) {
            alert('Please fill in all required fields');
            return;
        }

        createUser(formData)
            .then(response => {
                if (response && response.status === 201) {
                    setFormData({
                        email: '',
                        name: '',
                        password: ''
                    });
                    alert('User has been created successfully.');
                    navigate('/users');
                } else {
                    alert('Could not create user.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error. Could not create user. Please try again.');
            });
    }

    return (
        <div className="create-user-page-wrapper">
            <div className="create-user-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" name="email" value={formData.email}
                               required onChange={handleChange}/>
                        {emailExists && <div className="text-danger">Email is already taken</div>}
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" name="name" value={formData.name}
                               required onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordInput" name="password"
                               value={formData.password} required minLength={6} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!isFormValid || emailExists}>Submit
                    </button>
                </form>
            </div>
        </div>
    )

}

export default CreateUserPage;
