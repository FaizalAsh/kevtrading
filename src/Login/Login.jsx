// import React, { useState } from 'react'
// import './Login.css'
// import { useNavigate } from 'react-router-dom' 

// const Login = () => {
//   const [Empty, Setempty] = useState("")
//   const [Showmsg, SetShowmsg] = useState("")
//   const [PassEmpty, PassSetempty] = useState("")
//   const [PasShowmsg, PassSetShowmsg] = useState("")
  
//   const navigate = useNavigate();

//   const functionone = async () => {
//     // 1. Basic UI Validation
//     if (Empty === "") {
//       SetShowmsg("You must put email address")
//       return;
//     } else {
//       SetShowmsg("")
//     }

//     if (PassEmpty === "") {
//       PassSetShowmsg("You must put password")
//       return;
//     } else {
//       PassSetShowmsg("")
//     }

//     try {
//       // 2. Updated URL to match your Server.js (adding /auth)
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: Empty,
//           password: PassEmpty
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // 3. SUCCESS: Save user info to the browser
//         // Make sure your backend actually sends 'jwtToken' and 'name'
//         localStorage.setItem("token", data.jwtToken);
//         localStorage.setItem("userName", data.name);
        
//         // Redirect to home page
//         navigate('/'); 
//         // Force a reload so the Nav bar sees the new name
//         window.location.reload(); 
//       } else {
//         // 4. ERROR: Show the specific error from the backend
//         SetShowmsg(data.message || "Login failed");
//       }
//     } catch (error) {
//       // This happens if the fetch itself fails (server down or CORS error)
//       SetShowmsg("Connection error. Check if backend is running on port 8080!");
//     }
//   }

//   return (
//     <div className='mainnpage'>
//         <div className='anothermainpage'>
//             <div className='txt'>
//                 <h3 className='heading'>Welcome to kevTrading</h3>
//                 <p className='nortxt'>KevTrading is a global hedge fund focused on delivering consistent returns through advanced market strategies.</p>
//             </div>

//             <div className='boxgain'>
//                 <p className='log'>Login</p>
//                 <label className='logname'> Email address
//                     <input 
//                       type='text' 
//                       placeholder='Please type your email' 
//                       className='email' 
//                       value={Empty} 
//                       onChange={(e)=>Setempty(e.target.value)}
//                     />
//                 </label>
//                 {Showmsg && <p style={{color:"red", fontSize: "12px"}}>{Showmsg}</p>}

//                 <label className='logname'> Password
//                     <input 
//                       type='password' 
//                       placeholder='Please type your password' 
//                       className='pass' 
//                       value={PassEmpty} 
//                       onChange={(e)=> PassSetempty(e.target.value)}
//                     />
//                 </label>
//                 {PasShowmsg && <p style={{color:"red", fontSize: "12px"}}>{PasShowmsg}</p>}

//                 <label className="remember">
//                     <input type="checkbox" /> Remember Me
//                 </label>

//                 <button className='logbtn' onClick={functionone}>Login now</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom' 

const Login = () => {

  const [Empty, Setempty] = useState("")
  const [Showmsg, SetShowmsg] = useState("")
  const [PassEmpty, PassSetempty] = useState("")
  const [PasShowmsg, PassSetShowmsg] = useState("")
  
  const navigate = useNavigate();

  const functionone = async () => {

    // UI Validation
    if (Empty === "") {
      SetShowmsg("You must put email address")
      return;
    } else {
      SetShowmsg("")
    }

    if (PassEmpty === "") {
      PassSetShowmsg("You must put password")
      return;
    } else {
      PassSetShowmsg("")
    }

    try {

      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Empty,
          password: PassEmpty
        })
      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("token", data.jwtToken);
        localStorage.setItem("userName", data.name);

        navigate('/');
        window.location.reload();

      } else {

        // 🔹 If backend fails → check localStorage signup data
        const savedUser = JSON.parse(localStorage.getItem("userData"));

        if (
          savedUser &&
          Empty === savedUser.email &&
          PassEmpty === savedUser.password
        ) {

          localStorage.setItem("userName", savedUser.name);

          navigate('/');
          window.location.reload();

        } else {
          SetShowmsg(data.message || "Wrong email or password");
        }

      }

    } catch (error) {

      // 🔹 If backend not running → check localStorage
      const savedUser = JSON.parse(localStorage.getItem("userData"));

      if (
        savedUser &&
        Empty === savedUser.email &&
        PassEmpty === savedUser.password
      ) {

        localStorage.setItem("userName", savedUser.name);

        navigate('/');
        window.location.reload();

      } else {
        SetShowmsg("Connection error or wrong login details");
      }

    }
  }

  return (
    <div className='mainnpage'>
        <div className='anothermainpage'>
            <div className='txt'>
                <h3 className='heading'>Welcome to kevTrading</h3>
                <p className='nortxt'>KevTrading is a global hedge fund focused on delivering consistent returns through advanced market strategies.</p>
            </div>

            <div className='boxgain'>
                <p className='log'>Login</p>
                <label className='logname'> Email address
                    <input 
                      type='text' 
                      placeholder='Please type your email' 
                      className='email' 
                      value={Empty} 
                      onChange={(e)=>Setempty(e.target.value)}
                    />
                </label>
                {Showmsg && <p style={{color:"red", fontSize: "12px"}}>{Showmsg}</p>}

                <label className='logname'> Password
                    <input 
                      type='password' 
                      placeholder='Please type your password' 
                      className='pass' 
                      value={PassEmpty} 
                      onChange={(e)=> PassSetempty(e.target.value)}
                    />
                </label>
                {PasShowmsg && <p style={{color:"red", fontSize: "12px"}}>{PasShowmsg}</p>}

                <label className="remember">
                    <input type="checkbox" /> Remember Me
                </label>

                <button className='logbtn' onClick={functionone}>Login now</button>
            </div>
        </div>
    </div>
  )
}

export default Login