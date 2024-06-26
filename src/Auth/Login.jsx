import { Link } from "react-router-dom";
import navLogo from '../assets/image.png'

export default function Login() {

    

    const handleUser = (e) => {
        console.log(e.target.value)
    }
    const handlePass = (e) => {
        console.log(e.target.value)
    }
    return <>
        <div className="w-full text-center">
            <div className="w-1/2 h-[60vh] bg-white mx-auto border-2 border p-2 py-5 rounded-lg shadow-2xl">
                <div className="heading capitalize text-center">
                    LOGIN
                </div>
                <div className="grid gap-2 mt-3">

                    <table>
                        <tr className="grid">
                            <td> <label htmlFor="username">UserName</label></td>
                            <td> <input type="text" onChange={handleUser} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="UserName" /></td>
                        </tr>
                        <tr className="grid">
                            <td><label htmlFor="password" className="text-left">Password</label></td>
                            <td><input type="password" onChange={handlePass} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="UserPassword" /></td>
                        </tr>
                    </table>


                    <p>Don't have an account <Link to={'/signup'} className="primaryTextColor">Signup here !</Link></p>
                    <Link to={''}><button className="primaryBgColor text-white p-2 w-48 rounded-full">Login</button></Link>
                </div>
            </div>
        </div>
    </>

}