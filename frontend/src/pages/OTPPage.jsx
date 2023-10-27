import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation, useLoginMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import toast from "react-hot-toast";
import { Button } from "flowbite-react";
import Loader from "../components/Loader";
const OTPPage = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Create refs for each input field
  const { userInfo } = useSelector((state) => state.auth);
  const { formData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const [login, { isLoading1 }] = useLoginMutation();
  const [otpValue, setOtpValue] = useState(['', '', '', '']);

  const handleInputChange = (index, value) => {
    const newOtpValue = [...otpValue];
    newOtpValue[index] = value;
    setOtpValue(newOtpValue);
    if (value.length === 1) {
      if (index < inputRefs.length - 1) {
        // Shift focus to the next input
        inputRefs[index + 1].current.focus();
      } else {
        // The user is in the last cell; they can't go forward
        return;
      }
    } else if (value.length === 0) {
      if (index > 0) {
        // Backspace to the previous input
        inputRefs[index - 1].current.focus();
      } else {
        // The user is in the first cell; they can't go back
        return;
      }
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    } 
  }, [navigate, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Otp value:", otpValue)
    const otp = otpValue?.join('');
    
    try {
      const res = await register({...formData, otp}).unwrap();
      const {email, password} = formData;
      const loginRes = await login({ email, password }).unwrap();
      dispatch(setCredentials({...loginRes}))
      navigate('/')
      toast.success("Registered successfully")
    } catch (error) {
      console.log(error)
      toast.error(error?.data?.message || error.error);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {formData?.email}</p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name={`otp${index}`}
                        ref={inputRefs[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                { (isLoading || isLoading1) && <div className= 'text-center'><Loader /></div>}
                <div className="flex flex-col space-y-5">
                  <div>
                    <Button type="submit" onClick={handleSubmit} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </Button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
