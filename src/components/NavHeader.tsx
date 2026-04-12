import { Instagram, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { useIsMobile } from "./ui/use-mobile";


const navItems = [
  { label: "Início", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Sobre", to: "/sobre" },
  { label: "E-book", to: "/ebook" },
  { label: "Contato", to: "/contato" },
];

const headerItems = [
  { label: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/julainegui/" },
  { label: <FaWhatsapp className="h-4 w-4" />, href: "https://wa.me/5543999637029" },
];

export default function NavHeader() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="relative top-0 z-40 w-full border-b-2 border-[#C8A96A] bg-[#3a2c21]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <NavLink to="/" className="shrink-0">
          <Logo className="w-32 sm:w-36" />
        </NavLink>

        <nav className="hidden items-center md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "px-3 py-2 border-b-2 text-sm uppercase tracking-wide transition-colors lg:px-4",
                  isActive
                    ? "border-[#C8A96A] text-[#C8A96A]"
                    : "border-transparent text-white hover:text-[#C8A96A]",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {headerItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-[#C8A96A] p-2 transition-colors hover:bg-[#E7C19A]"
              aria-label="Abrir rede social"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            className="flex items-center rounded-md border border-[#C8A96A]/50 p-2 text-[#E8DED4] md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobile && isOpen ? (
        <nav className="border-t border-[#C8A96A]/30 px-4 py-3 md:hidden sm:px-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-md border-l-2 px-3 py-2 text-sm uppercase tracking-wide transition-colors",
                    isActive
                      ? "border-[#C8A96A] bg-[#C8A96A]/10 text-[#C8A96A]"
                      : "border-transparent text-[#E8DED4] hover:bg-[#C8A96A]/10 hover:text-[#C8A96A]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}