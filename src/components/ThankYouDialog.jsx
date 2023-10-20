import { forwardRef } from "react";
import checkIcon from "../images/icon-check.svg";

const ThankYouDialog = forwardRef(function ThankYouDialog(props, ref) {
  return (
    <>
      <dialog ref={ref} className="rounded-[8px]">
        <form
          method="dialog"
          className="flex flex-col items-center p-[24px] gap-[24px] max-w-[480px] sm:p-[48px]"
        >
          <img src={checkIcon} alt="Check icon" />
          <h1 className="font-bold text-[1.25rem] text-black">
            Thanks for your support!
          </h1>
          <p className="text-dark-gray text-center">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button className="btn w-fit">Got it!</button>
        </form>
      </dialog>
    </>
  );
});

export default ThankYouDialog;