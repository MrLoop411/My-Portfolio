import { useDarkMode } from "../contexts/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkModeToogle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="h-8 w-8" />
      ) : (
        <HiOutlineMoon className="h-8 w-8" />
      )}
    </button>
  );
}

export default DarkModeToogle;
