import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const ScrollContext = createContext(null);

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      // Use original time multiplier of 3000 to preserve custom scroll speed
      lenis.raf(time * 3000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    // Normalise section name to query selector
    let targetSelector = target;
    if (typeof target === 'string' && !target.startsWith('#') && !target.startsWith('.') && target !== '0') {
      targetSelector = `#${target}`;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (lenisRef.current) {
          if (targetSelector === '0' || targetSelector === 0) {
            lenisRef.current.scrollTo(0, { duration: 1.2, ...options });
          } else {
            lenisRef.current.scrollTo(targetSelector, { offset: -80, duration: 1.2, ...options });
          }
        }
      }, 400);
    } else {
      if (lenisRef.current) {
        if (targetSelector === '0' || targetSelector === 0) {
          lenisRef.current.scrollTo(0, { duration: 1.2, ...options });
        } else {
          lenisRef.current.scrollTo(targetSelector, { offset: -80, duration: 1.2, ...options });
        }
      } else {
        const el = typeof targetSelector === 'string' ? document.querySelector(targetSelector) : targetSelector;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (!targetSelector || targetSelector === '0') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}