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
  
const SignUp = ({modalclass, onClose}: {modalclass: string, onClose: any}) => {
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
            <button onClick={onClose} className="w-full h-1/10 text-right p-1 px-2">X</button>
            <section className="w-full h-full flex flex-col justify-center items-center">
                <input type="text" className='w-1/4 border rounded-t-2xl' onChange={handleFirstName} placeholder="First Name"/>
                <input type="text" className='w-1/4 border' onChange={handleLastName} placeholder="Last Name" />
                <input type="email" className='w-1/4 border' onChange={handleEmail} placeholder="Email"/>
                <input type="password" className='w-1/4 border' onChange={handlePassword} placeholder="Password" />
                <button className="bg-purple-800 text-white rounded-b-2xl hover:bg-purple-900 w-1/4"  onClick={() => createUser(user.email, user.password)} >Register</button>
            </section>
        </div>
    );
}

export default SignUp;