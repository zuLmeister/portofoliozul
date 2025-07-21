// src/theme.js

export const lightTheme = {
  token: {
    // PERBAIKAN: Menggunakan warna yang lebih kontras untuk link dan tombol.
    // Warna abu-abu terang (#f0f2f5) sulit terlihat di atas background putih.
    colorPrimary: "#1677ff", // Default Ant Design Blue

    colorBgContainer: "#ffffff",
    colorBgLayout: "#f5f5f5",
    colorText: "rgba(0, 0, 0, 0.88)",
    colorTextSecondary: "rgba(0, 0, 0, 0.65)",
    colorBorder: "#d9d9d9",
  },
};

export const darkTheme = {
  token: {
    // --- INI ADALAH PERBAIKAN UTAMA ---
    // colorPrimary harus warna TERANG di dark mode agar elemen aktif terlihat.
    colorPrimary: "#FFFFFF", // Mengubah warna elemen aktif menjadi putih

    colorBgContainer: "#1f1f1f",
    colorBgLayout: "#000000",
    colorText: "rgba(255, 255, 255, 0.85)",
    colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    colorBorder: "#424242",
  },
  components: {
    Anchor: {
      // Pengaturan ini untuk menyempurnakan warna hover dan link yang tidak aktif
      linkHoverColor: "#FFFFFF", // Warna saat di-hover tetap putih

      // Warna link aktif sekarang akan mengikuti token.colorPrimary (putih)
      // jadi tidak perlu didefinisikan ulang di sini.
    },
  },
};
