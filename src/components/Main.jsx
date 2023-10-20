import logo from "../images/logo-mastercraft.svg";
import PledgeCard from "./PledgeCard";
import PledgeDialog from "./PledgeDialog";
import { useRef, useState } from "react";
import ThankYouDialog from "./ThankYouDialog";

export default function Main() {

  const pledgeDialog = useRef(null);
  const thankYouDialog = useRef(null);
  const openPledjeDialog = () => {
    pledgeDialog.current.showModal();
  };
  const continuePledjeDialog = () => {
    pledgeDialog.current.close();
    thankYouDialog.current.showModal();
  };

	const goal = 100000;
	const daysLeft = 56;
	const [backed, setBacked] = useState(89914)
	const [totalBackers, setTotalBackers] = 	useState(5007)

	const addBacked = (amount) => {
		setBacked(backed + amount);
		setTotalBackers(totalBackers + 1)
	}

  return (
    <>
      <main className="pt-[244px] px-[24px] max-w-[778px] mx-auto sm:pt-[310px]">
        <div className="card sm:p-[48px] relative">
          <img
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-center font-bold text-[1.5rem] text-black leading-[1.75rem] mt-[16px]">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-center text-dark-gray mt-[20px]">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex justify-between flex-wrap items-center gap-[8px] mt-[24px]">
            <button className="btn" onClick={openPledjeDialog}>
              Back this project
            </button>
            <div className="group text-moderate-cyan flex items-center bg-dark-gray/10 rounded-full">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle
                    className="sm:fill-moderate-cyan sm:group-hover:fill-dark-gray"
                    fill="#2F2F2F"
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    className="sm:fill-white"
                    fill="#B1B1B1"
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <span className="font-bold px-[16px] group-hover:text-dark-gray hidden sm:inline-block">
                Bookmark
              </span>
            </div>
          </div>
        </div>
        <div id="discover" className="card sm:p-[48px] mt-[24px] ">
          <div className="flex flex-col sm:flex-row">
            <p className="text-center text-dark-gray min-w-[160px] sm:text-start">
              <span className="block text-center font-bold text-[2rem] text-black sm:text-start">
                ${backed.toLocaleString()}
              </span>
              of ${goal.toLocaleString()} backed
            </p>

            <div className="my-[20px] h-[1px] w-[80px] sm:h-[64px] sm:w-[1px] sm:my-0	sm:mx-[36px] bg-dark-gray/50 mx-auto"></div>

            <p className="text-center text-dark-gray min-w-[160px] sm:text-start">
              <span className="block text-center font-bold text-[2rem] text-black sm:text-start">
                {totalBackers.toLocaleString()}
              </span>
              total backers
            </p>

            <div className="my-[20px] h-[1px] w-[80px] sm:h-[64px] sm:w-[1px] sm:my-0	sm:mx-[36px] bg-dark-gray/50 mx-auto"></div>

            <p className="text-center text-dark-gray min-w-[160px] sm:text-start">
              <span className="block text-center font-bold text-[2rem] text-black sm:text-start">
                {daysLeft.toLocaleString()}
              </span>
              days left
            </p>
          </div>

          <div className="mt-[30px] w-full bg-dark-gray/20 rounded-full">
            <div
              className="h-[12px] bg-moderate-cyan rounded-full"
              role="progressbar"
              style={{
                width: `${backed / goal < 1 ? (backed / goal) * 100 : 100}%`,
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div id="about" className="card sm:p-[48px] grid gap-[24px] my-[24px]">
          <h3 className="font-bold text-[1.25rem] text-black">
            About this project
          </h3>
          <p className=" text-dark-gray">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className=" text-dark-gray">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <PledgeCard
            title="Bamboo Stand"
            pledgeAmount="Pledge $25 or more"
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  						you’ll be added to a special Backer member list."
            left="101"
            onClick={openPledjeDialog}
          />
          <PledgeCard
            title="Black Edition Stand"
            pledgeAmount="Pledge $75 or more"
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  						member list. Shipping is included."
            left="64"
            onClick={openPledjeDialog}
          />
          <PledgeCard
            title="Mahogany Special Edition"
            pledgeAmount="Pledge $200 or more"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  						to our Backer member list. Shipping is included."
            left="0"
            onClick={openPledjeDialog}
          />
        </div>

        <PledgeDialog
          onProceed={continuePledjeDialog}
          addBacked={addBacked}
          ref={pledgeDialog}
        />
        <ThankYouDialog ref={thankYouDialog} />
      </main>
    </>
  );
}
