import React from "react";
import Sidebar from "../_components/sidebar";
export default function PlatformLayout({ children }) {
  return (  
    <div className="flex">
    <Sidebar />
    
    <main className="p-20 flex-1">
    {children}
    </main>
    </div>
  );
}