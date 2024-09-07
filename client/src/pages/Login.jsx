import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Layout>
      <div className="my-16   ">

        <div className="flex justify-center items-center  h-[212px] bg-[#283659]">
          <h1 className="text-4xl bg-[#283659] font-bold text-white">Login</h1>
        </div>

<div className="flex justify-evenly items-start p-32">

        <div className="mt-10">
            <div className="w-[400px] font-poppins">
                <h1 className="text-2xl text-white font-poppins font-bold ">Sample Heading</h1>
                <p className="text-md text-white mt-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam amet at laboriosam commodi magni molestiae repudiandae nulla, eos fugiat minima, quod vero ut pariatur eius. Nulla laboriosam adipisci repudiandae.</p>
            </div>
        </div>
     


        <div className="text-white font-poppins ">
            <h1 className="font-semibold text-2xl my-10">Login to Talentbridge</h1>

            <div className="flex flex-col  gap-2">
                <label>Email</label>
                <input type="text" placeholder=" Enter your email" className="bg-white rounded-full h-[44px] w-[343px]  text-black" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="flex flex-col  mt-2 gap-2">
                <label>Password</label>
                <input type="password" placeholder=" Enter your password" className="bg-white rounded-full text-black w-[343px] h-[44px]" value={password} onChange={(e) => setPassword(e.target.value)}  />
                <div className="flex gap-2 justify-between text-xs opacity-35">
                    <ol>
                        <li>minimum 8 characters</li>
                        <li>one special character</li>
                        <li>one number</li>
                    </ol>
                    <ol>
                        <li>one uppercase character</li>
                        <li>one lowercase character</li>
                    </ol>
                </div>


                <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <p className="font-poppins font-thin text-sm">Keep me signed in</p>
                    </div>

                    <div>
                        <Link className="font-thin text-sm">Forgot Password?</Link>
                    </div>
                    

                </div>

                <div>
                    <button className="w-[343px] h-[44px] bg-[#29B6F6] rounded-full mt-10">Login</button>
                </div>
                
            </div>

        </div>
</div>
       

      

      </div>
    </Layout>
  );
};

export default Login;
