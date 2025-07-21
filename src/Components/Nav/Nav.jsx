import React, { useState } from "react";
import { Layout, Switch, Anchor, Space, Segmented } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

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

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.token.colorBgContainer,
    borderBottom: `1px solid ${theme.token.colorBorder}`,
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

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header style={headerStyle}>
        <div style={{ flexGrow: 1 }}>
          <Anchor direction="horizontal" items={anchorItems} />
        </div>
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
      </Header>
    </>
  );
};

export default Navigation;
