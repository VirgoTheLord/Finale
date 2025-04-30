import React from "react";
import { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("light"); // Default to light mode initially
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem("theme");
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const initialMode = userPref
        ? userPref
        : mediaQuery.matches
        ? "dark"
        : "light";
      setMode(initialMode);
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const handleChange = () => {
        const userPref = window.localStorage.getItem("theme");
        if (userPref) {
          setMode(userPref);
        } else {
          setMode(mediaQuery.matches ? "dark" : "light");
        }
      };
      handleChange(); // Initial check
      mediaQuery.addEventListener("change", handleChange);
      window.addEventListener("storage", handleChange); // Listen for changes in other tabs
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
        window.removeEventListener("storage", handleChange); // Cleanup listener
      };
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      if (mode === "light") {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode, isMounted]);

  return [mode, setMode];
};

export default useThemeSwitcher;
