import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef(null);
  const btnNav = useRef(null);
  const closeNav = () => {
    btnNav.current.hidden = false;
    navRef.current.hidden = true;
  };
  return (
    <>
      <header className="absolute flex justify-between px-[24px] pt-[32px] w-full z-[1] lg:px-[160px] sm:pt-[64px]">
        <a href="#" className="">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="flex-row hidden sm:flex gap-[16px] text-white">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>

        <button ref={btnNav} className="sm:hidden">
          <img
            src={hamburger}
            alt="Menu"
            onClick={() => {
              navRef.current.hidden = false;
              btnNav.current.hidden = true;
            }}
          />
        </button>

        <div ref={navRef} hidden>
          <div className="fixed inset-0 bg-black/20" onClick={closeNav}></div>
          <ul className="absolute mx-[24px] left-0 right-0 top-[64px] rounded-[8px] bg-white shadow grid px-[24px] py-[8px]">
            <li>
              <a className="block py-[16px]" href="#about" onClick={closeNav}>
                About
              </a>
            </li>
            <hr />
            <li>
              <a
                className="block py-[16px]"
                href="#discover"
                onClick={closeNav}
              >
                Discover
              </a>
            </li>
            <hr />
            <li>
              <a className="block py-[16px]" href="#" onClick={closeNav}>
                Get Started
              </a>
            </li>
          </ul>
          <button
            className="absolute top-[20px] right-[20px] p-[8px]"
            onClick={closeNav}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
              </g>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
