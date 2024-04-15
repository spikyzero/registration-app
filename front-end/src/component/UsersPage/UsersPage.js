import React, {useEffect, useState} from "react";
import {getUsers} from "../../common/services/UserService";
import {Link} from "react-router-dom";

export function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => r);

    }, []);

    return (
        <div className="users-page-wrapper">
            <div className="duals-button-container">
                <Link to="/">
                    <button type="button" className="btn btn-success button-1">Home</button>
                </Link>
                <Link to="/user/create">
                    <button type="button" className="btn btn-primary button-2">+</button>
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}

export default UsersPage;