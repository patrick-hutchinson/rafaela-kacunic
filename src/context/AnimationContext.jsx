"use client";

import { createContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Create the context
export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const pathname = usePathname();
  const previousPathRef = useRef(null);

  const [pathChanged, setPathChanged] = useState(null);

  useEffect(() => {
    if (pathname === "/" && previousPathRef.current && previousPathRef.current !== "/") {
      console.log("Navigated from a different route to /");
      // Do whatever you need here
      setPathChanged(true);
    } else {
      setPathChanged(false);
    }

    previousPathRef.current = pathname;
  }, [pathname]);

  return <AnimationContext.Provider value={{ pathChanged }}>{children}</AnimationContext.Provider>;
};
