// import { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { Home } from './components/home'
import { Event } from './components/event';
import { BrideAndGroom } from './components/bride_and_groom';
import { Family } from './components/family';
import { Gallery } from './components/gallery';
import { Friend } from './components/friend';
import { Contact } from './components/contact';
import { Testimonial } from './components/testimonial';

function App() {
  // const [count, setCount] = useState(0)
  // const { i18n, t } = useTranslation()
  // const addScript = (url: string): HTMLScriptElement => {
  //   const script = document.createElement("script");
  //   script.src = url;
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return script;
  // }

  // const loadScript = (url: string[]) : HTMLScriptElement[] => {
  //   const result: HTMLScriptElement[] = [];
  //   url.forEach((url) => {
  //     result.push(addScript(url));
  //   });
  //   return result;
  // }
  
  // useEffect(() => {
  //   const urls: string[] = [
  //     "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
  //     "public/js/bootstrap.min.js",
  //     "public/js/jquery.flexslider-min.js",
  //     "public/js/jquery.fancybox.pack.js",
  //     "public/js/retina.min.js",
  //     "public/js/modernizr.js",
  //     "public/js/main.js",
  //     "public/js/jquery.contact.js",
  //   ];
  //   const scripts = loadScript(urls);

  //   return () => {
  //     scripts.forEach((script) => {
  //       document.body.removeChild(script);
  //     })
  //   };
  // }, []);
  return (
    <>
      <Home />
      <BrideAndGroom />
      <Event />
      <Family />
      <Gallery />
      <Friend />
      <Testimonial />
      <Contact />
    </>
  )
}

export default App
