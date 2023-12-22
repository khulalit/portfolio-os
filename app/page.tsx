"use client";
import { AppProvider } from "@/context/Appcontext";
import Appwrapper from "@/components/Appwrapper";
import Lockscreen from "@/components/Lockscreen";
import { AnimatePresence } from "framer-motion";
import { LockProvider, useLockContext } from "@/context/LockContext";

export default function HomeWrapper() {
  return (
    <LockProvider>
      <AppProvider>
        <Home />
      </AppProvider>
    </LockProvider>
  );
}

function Home() {
  const { lock, setLock } = useLockContext();
  return (
    <main className="h-screen overflow-hidden">
      <AnimatePresence>
        {/* <Appwrapper/> */}
        {lock ? <Lockscreen setLock={setLock} /> : <Appwrapper />}
        {/* <Lockscreen/> */}
      </AnimatePresence>
    </main>
  );
}
