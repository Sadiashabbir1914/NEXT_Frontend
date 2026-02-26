import React from "react";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | SkillForge",
    default: "SkillForge"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
