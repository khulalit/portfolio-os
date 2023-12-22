import { createContext, useContext, useState } from "react";

const LockContext = createContext<any>([]);

export const useLockContext = () => {
  return useContext(LockContext);
};

export const LockProvider = ({ children }: any) => {
  const [lock, setLock] = useState(true);
  return (
    <LockContext.Provider value={{ setLock, lock }}>
      {children}
    </LockContext.Provider>
  );
};
