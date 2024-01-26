const FilterButtons = ({ handleFilterBtn, activeBtn }) => {
  const buttons = [
    {
      value: "all",
      color: "bg-gradient-to-tr from-yellow-400 to-yellow-600",
    },
    {
      value: "completed",
      color: " bg-gradient-to-tr from-green-400 to-green-600",
    },
    {
      value: "active",
      color: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    {
      value: "sort",
      color: "sort-btn-bg",
    },
  ];
  const makeOptionClassName = (index, color) => {
    const optionClasses = ["px-4", "py-2", "text-white", "rounded", `${color}`];
    if (index === activeBtn) {
      optionClasses.push("active-filter-btn");
    }
    return optionClasses.join(" ");
  };

  return (
    <div className="flex gap-5 mt-16 ">
      {buttons.map(({ color, value }, idx) => (
        <button
          key={idx}
          type="button"
          className={makeOptionClassName(idx, color)}
          name={value}
          onClick={(e) => handleFilterBtn(e, idx)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
