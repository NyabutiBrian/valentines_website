import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/home'); // Automatically navigate to the home page after 3 seconds
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Valentine Content */}
        <section className="max-w-7xl mx-auto shadow-2xl rounded-3xl">
            <div className="flex flex-col justify-center items-center text-whity m-4">
                <div className="font-Poppins">
                    <h6 className="text-sm">Hello</h6>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-MonteCarlo font-semibold py-2 tracking-wider">Mi Reina</h1>
                    <i className="fa-solid fa-heart fa-beat text-xl"></i>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome;