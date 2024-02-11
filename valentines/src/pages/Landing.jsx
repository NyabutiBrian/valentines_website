import React, { useState, useEffect } from 'react';
import SvgTop from '../components/SvgTop'
import SvgBottom from '../components/SvgBottom'
import { Link } from 'react-router-dom';

function Landing() {

    const [showFirstSection, setShowFirstSection] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
        setShowFirstSection(false);
    }, 3000);

    return () => clearTimeout(timer);
    }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between">
        <SvgTop/>

        {showFirstSection && (
            <section className="max-w-7xl mx-auto shadow-2xl rounded-3xl">
                <div className="flex flex-col justify-center items-center text-whity m-4">
                    <div className="font-Poppins">
                        <h6 className="text-sm">HAPPY</h6>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-MonteCarlo font-semibold py-2 tracking-wider">Valentines</h1>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-6xl font-MonteCarlo font-semibold py-2 tracking-widest md:tracking-wider">Day</h1>
                            <i className="fa-solid fa-heart-pulse fa-beat text-4xl"></i>
                        </div>
                    </div>
                </div>
            </section>
        )}
        
        {!showFirstSection && (
            <section className="max-w-4xl mx-4 xl:mx-auto shadow-2xl rounded-3xl">
                <div className="flex flex-col justify-center items-center text-whity m-4">
                    <div className="flex flex-col items-center justify-center py-4 sm:px-16">
                        <h1 className="text-4xl sm:text-6xl font-MonteCarlo font-semibold py-2 tracking-wider">Will You Be My</h1>
                        <div className="flex flex-row justify-center items-center space-x-8">
                            <h1 className="text-6xl sm:text-8xl font-MonteCarlo font-semibold py-2 tracking-widest md:tracking-wider">Valentines</h1>
                            <i className="fa-solid fa-heart-pulse fa-beat text-6xl sm:text-8xl"></i>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-sm sm:text-base space-x-16 py-4">
                        <div className="bg-secondary px-4 py-3 rounded-3xl active:bg-sky-700 transition duration-200 transform hover:scale-125">
                            <Link to="/yes" className="font-Poppins font-semibold">Obviously Yes</Link>
                        </div>
                        <div className="bg-secondary px-4 py-3 rounded-3xl active:bg-sky-700 transition duration-200 transform hover:scale-125">
                            <Link to="/no" className="font-Poppins font-semibold">Hell No</Link>
                        </div>
                    </div>
                </div>
            </section>
        )}

        <SvgBottom/>
    </div>
  )
}

export default Landing