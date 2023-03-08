interface IPortfolioCard {
    img: any;
    link: string;
    index: any;
    className?: string
  }
  
  const PortfolioCard = ({
    img,
    link,
    index,
    className
  }: IPortfolioCard) => {
    return (
      <div key={index} className={`col-span-1 ${className}`}>
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
  export default PortfolioCard;