import React from "react";
import Sidebar from "../_components/sidebar";

export default function PlatformLayout({ children }) {
  return (  
    <div className="flex min-h-screen">
    <Sidebar />
    
    <main className="flex-1 ml-56 p-6">
    {children}
    </main>
    </div>
  );
}