import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script>
          {`(function() {
          function setTheme(theme) {
            window.localStorage.setItem("theme", theme);
            if (theme === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }

          const savedTheme = window.localStorage.getItem("theme");
          if (savedTheme) {
            setTheme(savedTheme);
          } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
          }
        })();
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
