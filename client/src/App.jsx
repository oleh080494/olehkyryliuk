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
            <div className="h-[100vh] bg-[#101010] flex flex-row">
                <div className="flex flex-col w-[20vw] ml-[4vw]  mt-[3vh] items-center justify-center bg-[#212121] rounded-4xl">
                    <div className="ml-14 mb-7 mr-14 mt-14 flex-wrap  bg-[#393939] rounded-4xl">
                        <img className="m-0 p-6 object-contain" src="../public/oleh_photo.png" alt="oleh photo" />
                    </div>
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans text-center">Oleh Kyryliuk</div>
                    <div className="flex justify-center">
                        <div className=" bg-[#393939] mt-6 rounded-4xl inline-block px-4 py-2">
                            <h3 className="text-[#FFFFFF]">Web Developer</h3>
                        </div>
                    </div>

                    <div className="mt-8 mr-4 ml-4 bg-[#393939] h-1 w-4/5 rounded-2xl"></div>

                    <div className="flex flex-col space-y-4 ml-4 mt-5">

                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/email.png" alt="email" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">EMAIL</div>
                                <div className="text-[#FFFFFF] text-base">kyryliyk@gmail.com</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/mobile.png" alt="phone" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">PHONE</div>
                                <div className="text-[#FFFFFF] text-base">+45 42 31 75 62</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="../public/calender.png" alt="birthday" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">BIRTHDAY</div>
                                <div className="text-[#FFFFFF] text-base">April 8, 1994</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap space-x-2 justify-center mt-auto mb-4">
                        <img className="h-6 w-6" src="../public/facebook.png" alt="facebook" />
                        <img className="h-6 w-6" src="../public/linkedin.png" alt="linkedin" />
                        <img className="h-6 w-6" src="../public/instagram.png" alt="instagram" />
                    </div>

                </div>
                <div className="w-[70vw] mt-[3vh] ml-[2vw] bg-[#212121] rounded-4xl">
                    <div className="flex flex-row h-[10vh] bg-[#212121] rounded-4xl">

                        <div className="text-[#FFFFFF] w-2/5 mt-7 ml-7 text-5xl">Portfolio</div>

                        <div className="flex flex-row flex-wrap w-3/5 bg-[#2d2d2d] rounded-bl-4xl rounded-tr-4xl place-content-around items-center">
                            <div className="text-[#FFFFFF]">About</div>
                            <div className="text-[#FFFFFF]">Resume</div>
                            <div className="text-[#FFFFFF]">Portfolio</div>
                            <div className="text-[#FFFFFF]">Projects</div>
                            <div className="text-[#FFFFFF]">Contact</div>
                        </div>
                    </div>
                    <div className="bg-[#E1AC62] h-1.5 w-[4vw] rounded-2xl ml-7 mt-4"></div>
                </div>
            </div>
        </>
    );
}

export default App;
