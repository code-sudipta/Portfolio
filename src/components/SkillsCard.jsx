import { Card } from "primereact/card";

const SkillsCard = (props) => {
  return (
    <>
      <div className="hidden text-[deepskyblue] text-[orangered] text-[red] text-[deeppink] text-[cyan] text-[purple] text-[gold] text-[orange] text-[green] text-[blue]"></div>
      <Card className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col justify-center shadow-xl hover:bg-[var(--primary)] transition-all duration-300 hover:scale-105 raleway-family">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center">
          <i className={`${props.icon} text-2xl sm:text-3xl md:text-4xl text-[${props.iconColor}] text-[]`}></i>
          <p className="text-sm sm:text-base md:text-lg font-medium text-center leading-tight">{props.title}</p>
        </div>
      </Card>
    </>
  );
};

export default SkillsCard;
