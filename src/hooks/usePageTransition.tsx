import { useEffect } from "react";
import { useContext } from 'react'
import { mobileMenuContext } from '../App';

export default function usePageTransition() {

  const mobileMenuRef = useContext(mobileMenuContext)

  useEffect(() => {
    window.scrollTo(0, 0);

    if (mobileMenuRef.current) {
      // mobileMenuRef.current.style.display = "none";
    }

  }, []);
}
