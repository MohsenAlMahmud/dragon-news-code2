import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 font-bold p-3'>
            <h2 className='text-base-100 bg-secondary px-3 py-2'>Latest</h2>
            <Marquee className='flex gap-10' pauseOnHover={true}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati velit non? </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati velit non? </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati velit non? </p>
            </Marquee>

        </div>
    );
};

export default LatestNews;