const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full text-black max-w-[200px] p-4 bg-white rounded-lg">
      {children}
    </div>
  );
};

const CardTitle = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-xl text-black">{title}</h1>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

const CardFooter = ({ description }: { description: string }) => {
  return (
    <div className="border-t-[0.5p] border-t-black">
      <p>{description}</p>
    </div>
  );
};

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
