const Welcome = ({ id, content, number, title }) => {
  return (
    <div className="flex flex-col gap-1 shadow-md px-2 py-3 rounded-md items-center ">
      <h2 className="text-sm font-medium">{title}</h2>
      <h4 className="text-lg font-semibold">{number}</h4>
      <p className="text-sm font-medium">{content}</p>
    </div>
  );
};

export default Welcome;
