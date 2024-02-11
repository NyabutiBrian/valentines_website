import React from 'react'
import bensoul from '../assets/audio/bensoul.mp3'
import hearts from '../assets/images/hearts-1.gif'

function Yes() {

    const customStyle = {
        backgroundImage: `url(${hearts})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const customStyle2 = {
        backdropFilter: `blur(30px)`,
    };
  return (
    <>
    <div className="min-h-screen flex justify-center items-center" style={customStyle}>
        <section className="max-w-4xl mx-4 xl:mx-auto bg-transparent shadow-2xl rounded-3xl" style={customStyle2}>
            <div className="flex flex-col justify-center items-center text-whity m-4">
                <div className="flex flex-col items-center justify-center py-4 sm:px-16">
                    <h1 className="text-6xl font-semibold font-MonteCarlo py-4">Happy <span className="text-secondary">Valentines</span></h1>
                    <h1 className="text-6xl font-semibold font-MonteCarlo py-4"><span className="text-secondary">Mi</span> Reina</h1>
                    <p className="font-Poppins text-sm sm:text-md">
                        On this day of love, I want to express my deepest gratitude for your love the most 
                        precious gift I've ever known. With you, every moment is a celebration of passion and tenderness, 
                        and I am endlessly grateful for the privilege of sharing my life with you. <br/><br/>
                        As we journey hand in hand, I cherish every step we take together, knowing that with you by my side, 
                        every path is illuminated with love. You are my rock, my muse, and my greatest joy, and I pledge to 
                        cherish, honor, and adore you for all the days of my life. <br/><br/>
                        Happy Valentines Day, my Love. May our love continue to blossom and flourish, 
                        filling our lives with boundless happiness and unending devotion. <br/><br/>
                        Forever yours, <br/>
                        <span className="font-MonteCarlo text-4xl text-secondary">Momanyi_Brian</span>
                    </p>
                </div>
                <div className="flex flex-col items-center py-8">
                    <p className="font-Poppins mb-4 font-semibold text-lg">Bensoul - Forget You</p>
                    <audio controls>
                    <source src={bensoul} type="audio/mp3" />
                    </audio>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Yes