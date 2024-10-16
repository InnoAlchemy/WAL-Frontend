const Button = ({
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
      className={`text-white rounded-full px-4 lg:text-lg text-sm font-semibold bg-primary ` + className}
    >
      {title}
    </button>
  );
};

export default Button;
