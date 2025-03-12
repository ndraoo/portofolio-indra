import React, { useEffect, useState } from "react";
import "./App.css";
import ArrowDown from "./assets/arrow-down.svg";
import Instagram from "./assets/instagram.svg";
import Github from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";
import Porfile from "./assets/profile.png";
import Project1 from "./assets/lelang.png";
import Project2 from "./assets/project5.png";
import Project3 from "./assets/perpustakaan.png";
import Project4 from "./assets/snake.png";
import Project5 from "./assets/apotek.jpg";
import Project6 from "./assets/smartschool.png";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative left-0 right-0 bg-black;">
      <header className={`${scrolling ? '' : 'scrolled'}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl">
        <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                <li>
                  <a href="#aboutme" className="cursor-pointer">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="cursor-pointer">
                    Technologies
                  </a>
                </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Indra Portofolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li>
                  <a href="#aboutme" className="cursor-pointer">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="cursor-pointer">
                    Technologies
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="navbar-end">
              <a className="btn">Button</a>
            </div> */}
          </div>
        </div>
      </header>

      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Indra Purnomo</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Web Developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                I am a fresh gradute from SMK Tunas Media, majoring in Software Engineering. Currently, my focus lies in web development, and I have a passion for leaming new things.
                </p>
                <div className="flex justify-center md:justify-start mt-2">
                <ul className="flex gap-4 mt-2 ">
                  <li>
                    <a href="https://www.instagram.com/ndraooo/">
                      <img src={Instagram} className="w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/indra-purnomo-a36014291/"> 
                      <img src={LinkedIn} className="w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ndraoo/">
                      <img src={Github} className="w-5 bg-white" />
                    </a>
                  </li>
                </ul>
                </div>
            <button
                  onClick={() => window.location.href = 'mailto:indraprnm104@gmail.com'}
                  className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                >
                  Contact Me
                </button>
              </div>
            </div>
              <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* About me*/}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4 ">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-black">
            <div className="card lg:card-side shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Indra Purnomo</h2>
                <p>My name is Indra Purnomo, but my friends usually call me Indra. I have a great interest in the world of technology.

                  I am a recent graduate from a vocational high school (SMK), but I already have some experience in programming.

                  Currently, I am proficient in several technologies, including PHP,Restful API, React JS, Laravel, Tailwind CSS, JavaScript, PostgreSQL and MySQL.

                  You can contact me via email at: indraprnm104@gmail.com
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Apotek Online
                </h3>
                <p className="text-gray-400 text-sm mt-2">                
                  Sebuah website apotek online yang dibuat menggunakan backend Laravel dan frontend React Js.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                   <a href="https://github.com/ndraoo/apotek-online.git">
                    Checkout github
                    </a> 
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project6} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Smartschool - Invoice Payments API FLIP
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Menambahkan fitur Invoice Payments menggunakan API FLIP 
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Pelelangan Online
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Sebuah pelelangan online.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                   <a href="https://github.com/ndraoo/lelang">
                    Checkout github
                    </a> 
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Monitoring Keuangan Masjid
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Website Monitoring Keuang Masjid.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                   <a href="https://github.com/ndraoo/monitoring-keuangan-masjid">
                    Checkout github
                   </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Perpustakaan Online
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Sebuah Perpustakaan online menggunakan laravel 9.
                </p>
                <div className="flex gap-4 mt-12"> 
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="">
                    Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Laravel</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    RESTful API
                  </h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    React JS
                  </h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[35%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, TailwindCSS & Bootstrap</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PHP</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MySQL</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PostgreSQL</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
           
            </div>
          </div>
        </section>
        <Analytics />
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
