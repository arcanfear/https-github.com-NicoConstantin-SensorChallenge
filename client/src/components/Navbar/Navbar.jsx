import { useState } from "react";
import logo from "../../assets/images/E-Sensor-lightblue.png"
import { Link } from "react-router-dom";


export default function Navbar({classContainer}) {

    const [scrolled,setScrolled] = useState(false)

    let classBasics = "fixed | z-10 | h-20 w-full | flex justify-between items-center | transition-all duration-200 | pr-4 sm:pr-8 md:pr-12 lg:pr-20 font-orbitron text-lg"
    let classNormal = `${classBasics} bg-gray-100 bg-opacity-20 backdrop-blur-2xl text-lightblue`;
    let classScrolled = `${classBasics} bg-almost-black text-violet shadow-xl`;

    const changeBackground = ()=> {
        if(window.scrollY >= 150){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <div className={scrolled? classScrolled : classNormal}>
            <Link to="/">
            <img src={logo} alt="logo e-sensor" className="h-20 w-20" />
            </Link>
            <ul className="flex justify-between align-center font-medium w-9/12  sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-3/12 ">
                <li><a href="http://nicoconstantin.com">About me</a></li>
                <Link to="/create">
                    <li>Create Sensor</li>
                </Link>
            </ul>
        </div>
    )
  }