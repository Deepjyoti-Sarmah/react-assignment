import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { ProblemSet } from './components/ProblemSet';
import problems from '../data/problemList';
import SingleProblem from './components/SingleProblem';

/*
 * Temporary problems array schema
 */
// const problems = [{
//     title: "201. Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "42%"
// }, {
//     title: "201. Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "412%"
// },
// {
//     title: "202. Happy Number",
//     difficulty: "Easy",
//     acceptance: "54.9%"
// },
// {
//     title: "203. Remove Linked List Elements",
//     difficulty: "Hard",
//     acceptance: "42%"
// }];

//hooks 
// const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// };

// function useToken() {
//     const [token, setToken] = useState(getToken());
//     const saveToken = userToken => {
//         localStorage.setItem('token', JSON.stringify(userToken));
//         setToken(userToken.token)
//     };
//     return {
//         setToken: saveToken,
//         token
//     }
// }


function App() {

    /* Add routing here, routes look like -
        /login - Login page
        /signup - Signup page
        /problemset/all/ - All problems (see problems array above)
        /problems/:problem_slug - A single problem page
     */


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    <Route path="/problemset/all" element={<ProblemSet problems={problems} />} />
                    <Route path="/problems/:_id" element={<SingleProblem />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

// // A demo component
// function ProblemStatement(props) {
//     const title = props.title;
//     const acceptance = props.acceptance;
//     const difficulty = props.difficulty;

//     return <tr>
//         <td>
//             {title}
//         </td>
//         <td>
//             {acceptance}
//         </td>
//         <td>
//             {difficulty}
//         </td>
//     </tr>
// }
export default App;
