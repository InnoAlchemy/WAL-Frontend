const TransparentButton = ({
  title,
  onClick,
  className,
}: {
  title: string;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-primary border border-primary text-lg font-semibold rounded-full px-4 hover:bg-primary hover:text-white transition duration-300 ease-in ${className}`}
    >
      {title}
    </button>
  );
};

export default TransparentButton;
