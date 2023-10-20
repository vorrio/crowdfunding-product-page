import { forwardRef, useState } from "react";
import DialogPledgeCard from "./DialogPledgeCard";

const PledgeDialog = forwardRef(function PledgeDialog(props, ref) {
  const [selectedOption, setSelectedOption] = useState("");
  const onSuccess = (amount) => {
		props.addBacked(amount);
    ref.current.close();
    console.log(props);
    props.onProceed();
  };
  return (
    <>
      <dialog ref={ref} className="rounded-[8px]">
        <div className="p-[24px] grid gap-[24px] max-w-[730px] sm:p-[48px]">
          <button
            className="absolute group top-[24px] right-[24px] p-[8px]"
            onClick={() => ref.current.close()}
          >
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:opacity-80"
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fillRule="evenodd"
                opacity=".4"
              />
            </svg>
          </button>

          <h3 className="font-bold text-[1.25rem] text-black">
            Back this project
          </h3>
          <p className=" text-dark-gray">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <DialogPledgeCard
            title="Pledge with no reward"
            pledgeAmount={0}
            description="Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email."
            left={null}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onSuccess={onSuccess}
          />
          <DialogPledgeCard
            title="Bamboo Stand"
            pledgeAmount={25}
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  						you’ll be added to a special Backer member list."
            left="101"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onSuccess={onSuccess}
          />
          <DialogPledgeCard
            title="Black Edition Stand"
            pledgeAmount={75}
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  						member list. Shipping is included."
            left="64"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onSuccess={onSuccess}
          />
          <DialogPledgeCard
            title="Mahogany Special Edition"
            pledgeAmount={200}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  						to our Backer member list. Shipping is included."
            left="0"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onSuccess={onSuccess}
          />
        </div>
      </dialog>
    </>
  );
});

export default PledgeDialog;
