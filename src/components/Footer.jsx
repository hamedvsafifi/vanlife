import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-[10dvh] bg-[rgba(37,37,37,1)] text-white">
      <p>&copy; {new Date().getFullYear()} #VANLIFE</p>
    </footer>
  );
}
