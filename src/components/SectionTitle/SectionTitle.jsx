import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 text-center mx-auto my-8'>
            <p className='text-yellow-500 pb-3'>---{subHeading}---</p>
            <h1 className='text-3xl uppercase border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;