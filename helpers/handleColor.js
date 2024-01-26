const handleColor = (value) => {
  switch (value) {
    case 1:
      return "blue-bg_gradient";

    case 2:
      return "blue-yellow-bg_gradient";
    case 3:
      return "yellow-bg_gradient";
    case 4:
      return "yellow-red-bg_gradient";
    case 5:
      return "red-bg_gradient";
    default:
      return "";
  }
};

export default handleColor;
