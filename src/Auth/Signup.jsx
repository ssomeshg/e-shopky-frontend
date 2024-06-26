import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { baseUrl } from "../urlBase"
export default function Signup(){

    
  const [userName,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhoneNumber]= useState("")

    const handleUser = (e) => {
        setUsername(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    const handleMail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhoneNumber(e.target.value)
    }

    const signUpFun = async()=>{

      
        
        try{
            const signUpresp = await axios.post(`${baseUrl}/signup`,{userName:userName,pswd:password,phoneNumber:phoneNumber,userMail:email});
            

        }catch(err){
            console.log(err)
        }
    }

    return( <>
        <div className="w-full text-center">
            <div className="w-full px-2 md:px-0 md:w-1/2 min-h-[60vh] h-full bg-white mx-auto border-2 border p-2 py-5 rounded-lg shadow-2xl">
                <div className="heading capitalize text-center">
                    SIGN UP
                </div>
                <div className="grid gap-2 mt-3">

                    <table>
                        <tr className="grid">
                            <td> <label htmlFor="username">UserName</label></td>
                            <td> <input type="text" onChange={handleUser} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="UserName" /></td>
                        </tr>
                        <tr className="grid">
                            <td> <label htmlFor="email">Email</label></td>
                            <td> <input type="email" onChange={handleMail} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="Email" /></td>
                        </tr>
                        <tr className="grid">
                            <td><label htmlFor="password" className="text-left">Phone Number</label></td>
                            <td><input type="tel" onChange={handlePhone} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="Phone Number" /></td>
                        </tr>
                        <tr className="grid">
                            <td><label htmlFor="password" className="text-left">Password</label></td>
                            <td><input type="password" onChange={handlePass} className="border-2 border-[var(--primary-color)] p-2 placeholder:text-gray-300 focus:outline-[var(--primary-color)]" placeholder="UserPassword" /></td>
                        </tr>
                    </table>


                    <p>Already have an account <Link to={'/login'} className="primaryTextColor">Login here !</Link></p>
                    <Link to={''}><button className="primaryBgColor text-white p-2 w-48 rounded-full" onClick={signUpFun}>Sign Up</button></Link>
                </div>
            </div>
        </div>
    </>
    )

}