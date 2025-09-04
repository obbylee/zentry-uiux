"use client";

import clsx from "clsx";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

import Button from "./shared/button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  // Use a single effect for all scroll-related logic
  useEffect(() => {
    if (currentScrollY > 0) {
      setIsFloating(true);
      if (currentScrollY > lastScrollY) {
        // Scrolling down: hide navbar
        gsap.to(navContainerRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.2,
        });
      } else {
        // Scrolling up: show navbar
        gsap.to(navContainerRef.current, { y: 0, opacity: 1, duration: 0.2 });
      }
    } else {
      // At the top: show navbar and remove floating state
      setIsFloating(false);
      gsap.to(navContainerRef.current, { y: 0, opacity: 1, duration: 0.2 });
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(
    () => {
      gsap.to(navContainerRef.current, {
        y: currentScrollY > lastScrollY && currentScrollY > 0 ? -100 : 0,
        opacity: currentScrollY > lastScrollY && currentScrollY > 0 ? 0 : 1,
        duration: 0.2,
        ease: "power2.out",
      });
    },
    { dependencies: [currentScrollY, lastScrollY] }
  );

  return (
    <div
      ref={navContainerRef}
      className={clsx(
        "fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6",
        {
          "floating-nav": isFloating,
        }
      )}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
