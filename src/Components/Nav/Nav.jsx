import React, { useState } from "react";
import { Layout, Switch, Anchor, Space, Segmented, Button, Drawer } from "antd";
import { SunOutlined, MoonOutlined, MenuOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import useBreakpoint from "../Breakpoint/UseBreakpoint";

const { Header } = Layout;

const Navigation = ({
  isDarkMode,
  toggleTheme,
  theme,
  language,
  onLanguageChange,
  navigationText,
}) => {
  const [toggleCount, setToggleCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  const [drawerVisible, setDrawerVisible] = useState(false); // New state for drawer
  const isMobile = useBreakpoint(); // Use the custom hook

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.token.colorBgContainer,
    justifyContent: isMobile ? "space-between" : "flex-start",
    backgroundColor: theme.token.colorBgContainer,
    borderBottom: `1px solid ${theme.token.colorBorder}`,
    padding: isMobile ? "0 16px" : "0 50px",
  };

  const anchorItems = [
    { key: "home", href: "#home", title: navigationText.home },
    { key: "skills", href: "#skills", title: navigationText.skills },
    {
      key: "experience",
      href: "#experience",
      title: navigationText.experience,
    },
    { key: "education", href: "#education", title: navigationText.education },
  ];

  const handleThemeToggle = (checked) => {
    toggleTheme(checked); // ✅ Kirim nilai sebenarnya

    const newCount = toggleCount + 1;
    setToggleCount(newCount);

    if (newCount >= 5 && !cooldown) {
      toast.error("U Clicked Too Much on That Thing, Chill Out", {
        duration: 3000,
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      setCooldown(true);
      setTimeout(() => {
        setToggleCount(0);
        setCooldown(false);
      }, 5000);
    }
  };

  const NavigationControls = () => (
    <Space align="center">
      <Segmented
        options={["ID", "EN"]}
        value={language.toUpperCase()}
        onChange={(value) => onLanguageChange(value.toLowerCase())}
      />
      <Switch
        checked={isDarkMode}
        onChange={handleThemeToggle}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </Space>
  );

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header style={headerStyle}>
        {isMobile ? (
          <>
            <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
            <NavigationControls />
            <Drawer
              title="Menu"
              placement="left"
              onClose={closeDrawer}
              open={drawerVisible}
              bodyStyle={{ padding: 0 }}
            >
              <Anchor
                direction="vertical"
                items={anchorItems}
                onClick={closeDrawer} // Close drawer when a link is clicked
                style={{ padding: "24px" }}
              />
            </Drawer>
          </>
        ) : (
          <>
            <div style={{ flexGrow: 1 }}>
              <Anchor direction="horizontal" items={anchorItems} />
            </div>
            <NavigationControls />
          </>
        )}
      </Header>
    </>
  );
};

export default Navigation;
