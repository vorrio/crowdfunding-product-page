import { useRef, useState } from "react";

export default function DialogPledgeCard({
  title,
  pledgeAmount,
  description,
  left,
  selectedOption,
  setSelectedOption,
  onSuccess,
}) {
  const isActive = left !== "0";
  const radioBtn = useRef(false);
  const isChecked = selectedOption === title;
  const [pledgeValue, setPledgeValue] = useState(pledgeAmount);
  const handlePledgeInput = (e) => {
    setPledgeValue(e.target.value);
  };	
  const handleCardClick = () => {
    setSelectedOption(title);
  };
	const handleContinueBtn = (e) => {
		e.preventDefault();
		if (
			parseInt(pledgeValue) !== 0 &&
			parseInt(pledgeValue) >= pledgeAmount
		) {
			onSuccess(parseInt(pledgeValue));
		}
	}
  return (
    <>
      <label
        className={`rounded-[8px] border-[1px] ${
          isChecked
            ? "border-[2px] border-moderate-cyan"
            : "border-[1px] border-dark-gray/20"
        } ${!isActive && "opacity-50"}`}
      >
        <div className={`grid gap-[24px] p-[24px] `}>
          <div className="flex gap-[16px] items-center">
            <input
              ref={radioBtn}
              className="radiobtn group/item"
              type="radio"
              name="dialogItem"
              onChange={handleCardClick}
              id={title}
            />
            <div className="flex flex-col sm:flex-row sm:gap-[16px]">
              <h4 className="font-bold text-[1.125rem] text-black">{title}</h4>
              <p className="font-bold text-moderate-cyan">
                {pledgeAmount !== 0 && `Pledge ${pledgeAmount} or more`}
              </p>
            </div>
          </div>
          <p className=" text-dark-gray">{description}</p>
          {left !== null && (
            <p className="flex items-center gap-[8px]">
              <span className="font-bold text-[2rem] text-black">{left}</span>
              <span className="align-middle text-dark-gray">left</span>
            </p>
          )}
        </div>
        <div hidden={!isChecked || !isActive}>
          <div className=" w-full h-[1px] bg-dark-gray/20"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-[24px] sm:mt-0">
            <p className=" px-[16px] text-dark-gray text-center">
              Enter your pledge
            </p>

            <form
              method="dialog"
              className="flex flex-wrap justify-center gap-[12px] p-[16px]"
            >
              <div className="relative flex items-center px-[16px] py-[18px] border-[1px] border-dark-gray rounded-full">
                <span className="ml-[8px] text-dark-gray font-bold absolute inset-y-0 flex items-center pointer-events-none">
                  $
                </span>
                <input
                  type="number"
                  value={pledgeValue}
                  onChange={handlePledgeInput}
                  className="pl-[24px] border-none focus:outline-none w-[72px] text-black font-bold"
                />
              </div>
              <button className="btn px-[32px]" onClick={handleContinueBtn}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </label>
    </>
  );
}
