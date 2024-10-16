const SelectBox = ({
  title,
  options,
}: {
  title: string;
  options?: string[];
}) => {
  return (
    <div className="relative inline-block justify-between items-center min-w-[140px]">
      <select
        name={title}
        id={title.toLowerCase()}
        className="appearance-none bg-white border border-red-500 text-gray-500 pl-3 pr-8 py-2 rounded-full w-full focus:outline-none cursor-pointer"
      >
        <option value={title.toLocaleLowerCase()}>{title}</option>
        {options?.map((option, index) => (
          <option value={option + "_" + { index }}>{option}</option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
        <svg
          width="15"
          height="8"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.64648 2.19043L9.36514 9.90908L17.0838 2.19043"
            stroke="#C80032"
            stroke-width="3.08746"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;
