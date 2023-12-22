import React from 'react'

export default function AboutMe() {
  return (
    <div className='p-8 bg-black text-white h-full'>
        {/* <Image src="" alt=""> */}
        
        <h1 className='text-3xl text-center'>
            my name is Lalit, <br />
            I am a software Developer.
        </h1>
        <div className='border-2 border-white my-4'>

        </div>
        <ul className='my-8 font-semibold'>
            <li className='my-4'>
                🏫 I'm a Computer Science Post Graduate. Prior to the PG I have done degree in computer science Hons. I have worked as Software Developer Intern in Locofast for 6+ months. Now I'm looking for full time position as Developer both frontend or backend.
            </li>
            <li className='my-4'>
                💻 I enjoy building awsome software that solves real world problems.
            </li>
            <li className='my-4'>
                🎲 When I'm not coding on my next project. I like to read, play sports, and I'm a big cricket buff.
            </li>
            <li className='my-4'>
                🌟 I also like Machine Learning.
            </li>
        </ul>
    </div>
  )
}
