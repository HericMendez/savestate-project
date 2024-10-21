import { useState, useEffect } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { onHeaderNavColorChange, onSwitchTheme } from "store/slices/themeSlice";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useDispatch } from "react-redux";
import NavItem from "./NavItem";
const NavThemeChange = ({ mode }) => {
  const { switcher, themes } = useThemeSwitcher();
  const [isDarkTheme, setDarkTheme] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "dark";
      setDarkTheme(isDark);
      dispatch(onSwitchTheme(storedTheme));
      switcher({ theme: themes[storedTheme] });
    }
  }, [dispatch, switcher, themes]);

  const toggleTheme = () => {
    onHeaderNavColorChange("");
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    dispatch(onSwitchTheme(newTheme));
    switcher({ theme: themes[newTheme] });
    setDarkTheme(!isDarkTheme);
  };

  return (
    <NavItem onClick={toggleTheme} mode={mode}>
      {isDarkTheme ? (
        <MoonOutlined
          style={{
            fontSize: 36,
          }}
          className="nav-icon mr-0 text-light p-1"
        />
      ) : (
        <SunOutlined
          style={{
            fontSize: 36,
          }}
          className="nav-icon mr-0 text-light p-1"
        />
      )}
    </NavItem>
  );
};

export default NavThemeChange;
