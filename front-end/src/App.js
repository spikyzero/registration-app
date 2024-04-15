import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./component/UsersPage/UsersPage";
import CreateUserPage from "./component/CreateUserPage/CreateUserPage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersPage/>}/>
                <Route path="/user/create" element={<CreateUserPage/>}/>
            </Routes>
        </BrowserRouter>
    );

}

export default App;