import './App.css'

import { Signin } from './components/Signin'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp6wRft8cx49zgzIHv8x-lb_vmlh7rVRM",
  authDomain: "leetcode-c8c1e.firebaseapp.com",
  projectId: "leetcode-c8c1e",
  storageBucket: "leetcode-c8c1e.appspot.com",
  messagingSenderId: "703177137670",
  appId: "1:703177137670:web:cdef242f0f78fd9536ed87",
  measurementId: "G-S8LKZGKX02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
    <Signin />
    </>
  )
}

export default App
