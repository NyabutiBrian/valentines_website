import React from 'react'
import mobile1 from '../assets/waves/wave-haikei-mobile-1.svg'
import mobile2 from '../assets/waves/wave-haikei-mobile-2.svg'
import mobile3 from '../assets/waves/wave-haikei-mobile-3.svg'
import desktop1 from '../assets/waves/wave-haikei-1.svg'
import desktop2 from '../assets/waves/wave-haikei-2.svg'
import desktop3 from '../assets/waves/wave-haikei-3.svg'

function SvgTop() {
  return (
    <>
    {/* SVG TOP MOBILE */}
    <div className="md:hidden">
        <div className="relative">
            <div className="absolute top-0">
                <img src={mobile2} alt="Attractive decorative SVG for the top page" title='SVG filled with Pink Color for background'/>
            </div>
            <div className="absolute top-0">
                <img src={mobile3} alt="Attractive decorative SVG for the top page" title='SVG filled with White Color for background'/>
            </div>
            <div>
                <img src={mobile1} alt="Attractive decorative SVG for the top page" title='SVG filled with Pink Color for background'/>
            </div>
        </div>
    </div>

    {/* SVG TOP DESKTOP */}
    <div className="hidden md:block">
        <div className="relative">
            <div className="absolute top-0">
                <img src={desktop2} alt="Attractive decorative SVG for the bottom page" title='SVG filled with Pink Color for background'/>
            </div>
            <div className="absolute -top-10">
                <img src={desktop3} alt="Attractive decorative SVG for the bottom page" title='SVG filled with White Color for background'/>
            </div>
            <div>
                <img src={desktop1} alt="Attractive decorative SVG for the bottom page" title='SVG filled with Pink Color for background'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SvgTop