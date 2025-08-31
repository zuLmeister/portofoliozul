// src/theme.js

export const lightTheme = {
  token: {
    colorPrimary: "#1677ff", // Default Ant Design Blue

    // Background
    colorBgContainer: "#ffffff",
    colorBgLayout: "#f5f5f5",

    // Text
    colorText: "rgba(0, 0, 0, 0.88)",
    colorTextSecondary: "rgba(0, 0, 0, 0.65)",
    colorTextDescription: "rgba(0, 0, 0, 0.65)", // ✅ buat <Text type="secondary">

    // Border
    colorBorder: "#d9d9d9",
  },
  components: {
    Button: {
      // 🔘 Default button (contoh ID/EN switch)
      defaultBg: "#ffffff",
      defaultColor: "rgba(0,0,0,0.88)",
      defaultBorderColor: "#d9d9d9",

      // 🔵 Primary button
      colorPrimary: "#1677ff",
      colorPrimaryHover: "#3c92ff",
      colorPrimaryActive: "#0e5fd8",
      colorTextLightSolid: "#ffffff",
    },
  },
};

export const darkTheme = {
  token: {
    colorPrimary: "#1677ff",

    // Background
    colorBgContainer: "#1f1f1f",
    colorBgLayout: "#000000",

    // Text
    colorText: "rgba(255, 255, 255, 0.85)",
    colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    colorTextDescription: "rgba(255, 255, 255, 0.65)", // ✅ fix <Text type="secondary">
    colorTextHeading: "#ffffff",

    // Border
    colorBorder: "#424242",
  },
  components: {
    Typography: {
      colorTextStrong: "#ffffff", // <Text strong> default putih
    },
    Timeline: {
      itemBg: "transparent",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorTextDescription: "rgba(255, 255, 255, 0.65)",
      colorTextStrong: "#ffffff",
    },
    Modal: {
      contentBg: "#1f1f1f",
      headerBg: "#1f1f1f",
      titleColor: "#ffffff",
      colorText: "rgba(255, 255, 255, 0.85)",
    },
    Button: {
      // 🔘 Default button (contoh ID/EN switch)
      defaultBg: "transparent",
      defaultColor: "#ffffff",
      defaultBorderColor: "#424242",

      // 🔵 Primary button
      colorPrimary: "#1677ff",
      colorPrimaryHover: "#3c92ff",
      colorPrimaryActive: "#0e5fd8",
      colorTextLightSolid: "#ffffff",
    },
    Switch: {
      handleBg: "#1677ff",
      trackBg: "#424242",
      colorText: "#ffffff",
    },
  },
};
