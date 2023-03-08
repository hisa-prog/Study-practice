interface IInvestorsCard {
  img: any;
  link: string;
  index: any;
}

const InvestorsCard = ({
  img,
  link,
  index,
}: IInvestorsCard) => {
  return (
    <div key={index} className={`col-span-1`}>
        {link != '' ? (
            <a className={``} href={link} target="_blank">
                <img src={img} alt="" className="" />
            </a>
        ) : (
            <img src={img} alt="" className="" />
        )}
      
    </div>
  );
};
export default InvestorsCard;
