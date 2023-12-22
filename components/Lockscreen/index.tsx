import './styles.css';
import Image from 'next/image';
import OnOffIcon from '@/assets/power-off.png';
import UbuntuLogo from '@/assets/ubuntu-logo.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Lockscreen({ setLock }: { setLock: Function }) {

    const [loading, setLoading] = useState(false);

    function lockScreenHandler(){
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setLock(false)
        },1000)
    }

    const varient = {
        exit : {
            y: -100,
            opacity: 0,
        }
    }

    return (
        <motion.div 
            variants={varient}
            exit='exit'
            className='h-screen flex justify-center items-center rounded-md lockscreen-overlay'>
            <div>
                <div className='os-name'>
                    Ubuntu
                </div>
                <div className='os-ver'>
                    Futura
                </div>
                <div className=' flex justify-center items-center p-8'>
                    {loading ? <Image src={UbuntuLogo} alt='loader' className='logo-spinner'/> :
                    <button className='lockscreen-btn' onClick={() => lockScreenHandler()}>
                        <Image src={OnOffIcon} alt='onoff' />
                    </button> }
                </div>
            </div>
        </motion.div>
    )
}
