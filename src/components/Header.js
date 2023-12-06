// src/components/Header.js
import React from 'react';
// import { useSpring, animated } from 'react-spring';
import headerbg from './headerbg.png';

const Header = () => {
    // const props = useSpring({
    //     from: { backgroundImage: 'linear-gradient(0deg, #4b9ff2, #086bcf)' },
    //     to: { backgroundImage: 'linear-gradient(360deg, #4b9ff2, #086bcf)', },
    //     loop: { reverse: true },
    //     config: { duration: 1000 },
    // });

    return (
        <section
            className="relative flex flex-col items-center justify-center h-screen bg-cover bg-opacity-50 md:bg-fixed bg-center"
            style={{
                backgroundImage: `url(${headerbg})`,
            }}
        >
            <div className="md:ml-6 z-10 text-center">
                <h1 className="text-7xl mb-2 tracking-wider font-motorstencil">Viresh Soedhwa</h1>
                <p className="ml-px text-4xl text-black font-motorstencil">My Resume</p>
            </div>
        </section>
    );
};

export default Header;
