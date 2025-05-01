"use client";

import React from "react";
import Link from "next/link";

const Layout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Welcome to Sean's Home Page!</h1>
      <Link href="/about">
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"> Go to About Page </button>
      </Link>
    </div>
  );
};

export default Layout;