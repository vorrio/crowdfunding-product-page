export default function PledgeCard({ title, pledgeAmount, description, left, onClick }) {
	const isActive = left !== "0"
  return (
    <>
      <div
        className={`grid gap-[24px] rounded-[8px] p-[24px] border-[1px] border-dark-gray/20 ${
          !isActive && "opacity-50"
        }`}
      >
        <div>
          <h4 className="font-bold text-[1.125rem] text-black">{title}</h4>
          <p className="font-bold text-moderate-cyan">{pledgeAmount}</p>
        </div>
        <p className=" text-dark-gray">{description}</p>
        <p className="flex items-center gap-[8px]">
          <span className="font-bold text-[2rem] text-black">{left}</span>
          <span className="align-middle text-dark-gray">left</span>
        </p>
        <button
          className={`btn w-fit ${!isActive && "bg-dark-gray"}`}
          onClick={onClick}
          disabled={!isActive}
        >
          {isActive ? "Select Reward" : "Out of Stock"}
        </button>
      </div>
    </>
  );
}
