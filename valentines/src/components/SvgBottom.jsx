import React from 'react'
import mobile4 from '../assets/waves/wave-haikei-mobile-4.svg'
import mobile5 from '../assets/waves/wave-haikei-mobile-5.svg'
import desktop4 from '../assets/waves/wave-haikei-desktop-4.svg'
import desktop5 from '../assets/waves/wave-haikei-desktop-5.svg'

function SvgBottom() {
  return (
    <>
        {/* SVG BOTTOM MOBILE */}
        <div className="md:hidden">
            <div className="relative">
                <div className="absolute bottom-0">
                    <img src={mobile5} alt="Attractive decorative SVG for the top page" title='SVG filled with White Color for background'/>
                </div>
                <div>
                    <img src={mobile4} alt="Attractive decorative SVG for the top page" title='SVG filled with Pink Color for background'/>
                </div>
            </div>
        </div>

        {/* SVG BOTTOM DESKTOP */}
        <div className="hidden md:block">
            <div className="relative">
                <div className="absolute bottom-0">
                    <img src={desktop5} alt="Attractive decorative SVG for the bottom page" title='SVG filled with White Color for background'/>
                </div>
                <div>
                    <img src={desktop4} alt="Attractive decorative SVG for the bottom page" title='SVG filled with Pink Color for background'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SvgBottom