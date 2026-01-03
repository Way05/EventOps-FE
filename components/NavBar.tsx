"use client";
import { ArrowLeftIcon, ArrowRightIcon, HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavBarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "item 1",
    },
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "item 2",
    },
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "item 3",
    },
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "item 4",
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: { keyCode: number; }) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <aside
      className={`
        h-full bg-white border-r
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && (
          <img
            src="https://i.imgur.com/520zDfd.png"
            alt="Logo"
            className="w-28"
          />
        )}

        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </Button>
      </div>

      {/* Menu */}
      <nav >
        {sideList.map(({ icon, title }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 hover:bg-pink-500 hover:text-white"
          >
            {icon}
            {isOpen && <span>{title}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}