import { Navbar, NavbarItem, NavbarSection } from "@/components/navbar";
import { Logo } from "@/components/logo";
import { Link } from "react-router-dom"; // если у тебя React Router

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-r from-indigo-500 to-blue-600 text-white min-h-screen flex flex-col">
      <Navbar>
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>
        <NavbarSection>
          <NavbarItem href="/" current>
            Home
          </NavbarItem>
          <NavbarItem href="/features">Features</NavbarItem>
          <NavbarItem href="/pricing">Pricing</NavbarItem>
          <NavbarItem href="/contact">Contact</NavbarItem>
        </NavbarSection>
      </Navbar>

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Добро пожаловать 🚀</h1>
        <p className="text-lg max-w-2xl mb-8">
          Лендинг на React + Tailwind + TypeScript готов к использованию.  
          Создаём быстрые и красивые сайты легко.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-200 transition">
          Начать
        </button>
      </div>
    </header>
  );
}
