import { onAuthStateChanged } from "firebase/auth";
import { app, db, firebaseAuths, usersRef } from "../../firebase";
import { useState } from "react";
import { doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";

const auth = firebaseAuths.getAuth(app);
const executeQuery = () => {
    getDoc(usersRef).then(res => {
        console.log("Res");
        console.log(res);
        console.log(res.data());
    }).catch(err => {
        console.log("Error: " + err)
    });
}
executeQuery();
const createUser = (email: string, password: string) => {
    console.log(email + ' ' + password + ' ' + auth)
  
    
    firebaseAuths
      .createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log("succesfully created a user!");
          const user = userCredential.user;
          console.log(user);
  
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
  }
  
  const SignUp = ({modalclass}: {modalclass: string}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    onAuthStateChanged(auth, u => {
        console.log("You are logged in as ")
        console.log(u)
        setDoc(doc(db, "users", `${u?.uid}`), {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            uId: u?.uid
        })
    })

    const handleFirstName = (e: any) => {
        setUser(prevUser => {
            return (
              {
                ...prevUser,
                firstName: e.target.value
              }
            );
        })
    }

    const handleLastName = (e: any) => {
        setUser(prevUser => {
            return (
              {
                ...prevUser,
                lastName: e.target.value
              }
            );
        })
    }

    const handleEmail = (e: any) => {
        setUser(prevUser => {
          return (
            {
              ...prevUser,
              email: e.target.value
            }
          );
        })
    }
    
    const handlePassword = (e: any) => {
        setUser(prevUser => {
            return (
            {
                ...prevUser,
                password: e.target.value
            }
            );
        })
    }
    return (
        <div className={modalclass}>
            <section className="w-full h-full flex flex-col justify-center items-center">
                <div>
                    <input type="text" className='border' onChange={handleFirstName} placeholder="First Name"/>
                </div>
                <div>
                    <input type="text" className='border' onChange={handleLastName} placeholder="Last Name" />
                </div>
                <div>
                    <input type="email" className='border' onChange={handleEmail} placeholder="Email"/>
                </div>
                <div>
                    <input type="password" className='border' onChange={handlePassword} placeholder="Password" />
                </div>
                <button className="bg-purple-800 text-white rounded-b-2xl p-2 hover:bg-purple-900 w-1/3"  onClick={() => createUser(user.email, user.password)} >Register</button>
            </section>
        </div>
    );
}

export default SignUp;