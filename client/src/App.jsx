import React, { useEffect, useState } from 'react';


function App() {
    const [number, setNumber] = useState(0);
    const [backendData, setBackendData] = useState({});

    function increment() {
        setNumber((prev) => prev + 1);
    }

    useEffect(() => {
        //for development fetch("/api")
        //for production
        //const apiUrl = import.meta.env.VITE_API_URL || "";
        //fetch(`${apiUrl}/api`).then(
        fetch("/api").then(
            res => res.json()
        ).then(data => {
            console.log(data);
            setBackendData(data);
        })
    }, []);

    return (
        <>
            <div className="h-[100vh] bg-[#232431] flex flex-row">
                <div className="w-[20vw] ml-[4vw]  mt-[3vh] items-center justify-center bg-[#323443] rounded-4xl">
                    <div className="ml-14 mb-7 mr-14 mt-14 flex-wrap  bg-[#575a6f] rounded-4xl">
                        <img className="m-0 p-6 object-contain" src="../public/oleh_photo.png" alt="oleh photo" />
                    </div>
                    <div className="text-[#FFFFFF] text-4xl font-[sans-serif] text-center">Oleh Kyryliuk</div>
                    <div className="flex justify-center">
                        <div className=" bg-[#55565f] mt-6 rounded-4xl inline-block px-4 py-2">
                            <h3 className="text-[#FFFFFF]">Web Developer</h3>
                        </div>
                    </div>

                    <div className="mt-8 mr-4 ml-4 bg-[#55565f] h-0.5 "></div>

                    <div className="flex flex-col space-y-4 ml-4 mt-5">

                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/email.png" alt="email" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#535561] text-sm">EMAIL</div>
                                <div className="text-[#FFFFFF] text-base">kyryliyk@gmail.com</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/mobile.png" alt="phone" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#535561] text-sm">PHONE</div>
                                <div className="text-[#FFFFFF] text-base">+45 42 31 75 62</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/calender.png" alt="birthday" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#535561] text-sm">BIRTHDAY</div>
                                <div className="text-[#FFFFFF] text-base">April 8, 1994</div>
                            </div>
                        </div>
                    </div>






                </div>
                <div className="w-[70vw] mt-[3vh] ml-[2vw] bg-[#323443] rounded-4xl"></div>
            </div>
        </>
    );
}

export default App;
