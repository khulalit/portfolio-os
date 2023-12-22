'use client'
import Titlebar from './Titlebar';
import MainScreen from './MainScreen';
import { motion } from 'framer-motion';

export default function Window({ onTop, zindex, Component, title, styleClass, maximize }: { zindex: number, title: string, styleClass: string, onTop: boolean, maximize: boolean, Component: any }) {

    if (maximize) {
        return (
            <div className={`w-full fixed h-screen text-sm resize whole-window ${styleClass}`} style={{ zIndex: zindex }}>
                <Titlebar title={title} onTop={onTop} />
                <MainScreen>
                    <Component />
                </MainScreen>
            </div>
        )
    }

    // framer motion animation varient
    const variants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag
            style={{
                width: 700,
                height: 500,
                position: 'absolute',
                zIndex: onTop ? 999 : 10 
            }}
            
        >
            <div className={`w-[700px] h-[500px] absolute top-0 left-0 text-sm resize shadow-xl  whole-window ${styleClass}`}>
                <Titlebar title={title} onTop={onTop} />
                <MainScreen>
                    <Component />
                </MainScreen>
            </div>
        </motion.div>
    )
}
