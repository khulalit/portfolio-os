import React from 'react'

export default function Education() {
  return (
    <div className=' bg-black h-full text-white'>
        <h1 className='text-3xl text-center mt-4'>
           Education
        </h1>
        <div className='border-[1px] border-white my-4 w-1/2 inset-0 m-auto'>

        </div>
        <ul className='my-4 font-semibold px-4'>
            <li className='my-4'>
                <h2 className='text-2xl'>
                    ✔
                    Masters of Science, Computer Science <br />

                    <span className='text-sm'>
                        2021-2023
                    </span>
                </h2>
                <p>
                    Department of Computer Science, University of Delhi
                </p>    
            </li>
            <li className='my-4'>
                <h2 className='text-2xl'>
                    ✔
                    Bachelors of Science (Hons.), Computer Science <br />
                    <span className='text-sm'>
                        2018-2021
                    </span>
                </h2>
                <p>
                    Acharya Narendra Dev College, University of Delhi
                </p>    
            </li>
        </ul>
    </div>
  )
}
