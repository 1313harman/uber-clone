import React, { useState,useEffect  } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import images from './Images'
import { ImCross } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import {onAuthStateChanged, signOut,getAuth} from 'firebase/auth'
import { doc,getDoc } from "firebase/firestore";
import {auth,db} from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useMediaQuery} from 'react-responsive'


function Header() {
  const [signUpPage,setSignUpPage] = useState(false)
  const [userDetail,setUserDetail] = useState(null)
  const isMobile = useMediaQuery({maxWidth:599})
  const isDesktop = useMediaQuery({minWidth:599})
  const gotoSignin = useNavigate()
  const gotoGo = useNavigate()
  AOS.init({ duration: 350 });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
        } else {
          console.log('User does not exist');
        }
      } else {
        setUserDetail(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleLogout = async () =>{
    try {
      await signOut(auth)
      setUserDetail(null)
      toast.error("User signed out successfully")
    } catch (error) {
      toast.error(error.message)
    }
  }

  // setTimeout(() => {
  //   console.log(userDetail)
  // },  1500);

  const handleSignUpPageOpen = () =>{
    setSignUpPage(true)
    console.log('Signup Page activated',signUpPage)
    document.body.style.overflowY = 'hidden'
  }

  const handleSignUpPageClose = () =>{
    setSignUpPage(false)
    document.body.style.overflowY = 'scroll'
  }

  const HandleSingin = () =>{
    gotoSignin('/signin')
    setSignUpPage(false)
    document.body.style.overflowY = 'hidden'
  }

  return (
    <>
        <div className={`${isDesktop? `flex inset-0 bg-black h-[64px] w-auto justify-center items-center ${signUpPage? ' absolute z-50' : ''}` : ''} ${isMobile? `flex inset-0 bg-black h-[64px] w-[810px] justify-start items-center ${signUpPage? ' absolute z-50' : ''}` : ''}`}>
          <div className={` ${isMobile? 'flex justify-center items-center gap-64' : 'flex justify-center items-center text-center gap-[710px]'}`}>
            <div className={` ${isMobile?  'flex justify-center items-center' :'flex justify-center items-center gap-2'}`}>
              <div className={`${isMobile? 'justify-center items-center' : 'justify-center items-center'}`}>
                <Link><h1 className={` ${isMobile? 'text-white text-2xl ml-2' : 'text-white text-2xl mr-2'}`}>Uber</h1></Link>
              </div>
              {isDesktop && 
                <>
                    <div className='hover:bg-gray-600 px-[8px] py-1 rounded-full hover:bg-opacity-40 transition-colors duration-200' role='button' onClick={()=>gotoGo('/go')}>
                      <Link to='/go'><h1 className='text-white text-md'>Ride</h1></Link>
                    </div>
                    <div className='hover:bg-gray-600 px-[8px] py-1 rounded-full hover:bg-opacity-40 transition-colors duration-200' role='button'>
                      <Link><h1 className='text-white text-md'>Drive</h1></Link>
                    </div>
                    <div className='hover:bg-gray-600 px-[8px] py-1  rounded-full hover:bg-opacity-40 transition-colors duration-200' role='button'>
                      <Link><h1 className='text-white text-md' >Buisness</h1></Link>
                    </div>
                    <div role='button'>
                      <h1 className='text-white text-md' >About</h1>
                    </div>
                </>
              }
            </div>

            <div className={` ${isMobile? 'flex justify-center items-center' : 'flex justify-center items-center gap-7'}`}>
              {isDesktop && 
                <>
                  <button><img className='h-3 w-3' src={images.LanguageIcon} alt="" /></button><button><span className='text-white -ml-5 font-semibold font-PlexSans'>EN</span></button>
                  <Link><h1 className='text-white text-md font-PlexSans font-semibold'>Help</h1></Link>
                  <button><h1 className='text-white text-md font-PlexSans font-semibold' role='button' onClick={handleLogout}>{userDetail ? 'Logout' : 'Login'}</h1></button>  
                </>
              }
              <div className={` ${isMobile? 'flex justify-between items-center bg-white rounded-full px-3 py-2 mr-2' : 'flex justify-between items-center bg-white rounded-full px-3 py-2 -ml-3'}`} role='button' onClick={signUpPage ? handleSignUpPageClose : handleSignUpPageOpen}>
                <button><h1 className={` ${isMobile? 'text-black text-sm font-semibold font-PlexSans' : 'text-black text-sm font-semibold font-PlexSans'}`} onClick={signUpPage ? handleSignUpPageClose : handleSignUpPageOpen}>{userDetail? <><h1>{userDetail.fullName}</h1></> : 'Sign Up'}</h1></button>   
              </div>          
            </div>
          </div>
        </div>
        {/* SignUp Page */}
        {signUpPage &&
          <>
            <div className='flex flex-col bg-white fixed inset-0 z-20 justify-center items-center overflow-y-scroll gap-12' data-aos='fade-down'>
                <div className='flex justify-end w-full pr-28 mt-80' >
                  <ImCross className='h-5 w-5' role="button" onClick={handleSignUpPageClose}/>
                </div>
                <div className='flex gap-44'>
                  <div className='py-16 '>
                    <div className='inline-flex  justify-between items-center '>
                      <button className='  border-b-2 border-b-black w-[460px]  text-left py-9 border-opacity-60 hover:opacity-65' onClick={HandleSingin}><h1 className='text-4xl font-PlexSans font-semibold hover:opacity-65' >Sign up to drive & deliver</h1></button>
                      <FaArrowRight className='-ml-6  h-8 w-8'/>
                    </div>
                  </div>

                  <div className='py-16 '>
                    <div className='inline-flex  justify-between items-center '>
                      <button className='  border-b-2 border-b-black w-[460px]  text-left py-9 border-opacity-60 hover:opacity-65'><h1 className='text-4xl font-PlexSans font-semibold hover:opacity-65'>Create a rider account</h1></button>
                      <FaArrowRight className='-ml-6  h-8 w-8'/>
                    </div>
                  </div>
                </div>
                <div className='flex gap-44 -mt-20'>
                  <div className='py-16 '>
                    <div className='inline-flex  justify-between items-center '>
                      <button className='  border-b-2 border-b-black w-[460px]  text-left py-9 border-opacity-60 hover:opacity-65'><h1 className='text-4xl font-PlexSans font-semibold hover:opacity-65'>Order delivery with Uber Eats</h1></button>
                      <FaArrowRight className='-ml-6  h-8 w-8'/>
                    </div>
                  </div>

                  <div className='py-16 '>
                    <div className='inline-flex  justify-between items-center '>
                      <button className='  border-b-2 border-b-black w-[460px]  text-left py-9 border-opacity-60 hover:opacity-65'><h1 className='text-4xl font-PlexSans font-semibold hover:opacity-65'>Sign up for Uber for Business</h1></button>
                      <FaArrowRight className='-ml-6  h-8 w-8'/>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex justify-center items-end'>
            <ToastContainer />
            </div>
          </> 
        }
    </>
  )
}

export default Header