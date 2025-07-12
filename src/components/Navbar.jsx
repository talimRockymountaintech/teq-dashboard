import { Bell, ChevronDown, Moon, Search, Sun } from 'lucide-react';
// import Input from './ui/input';
import { useEffect, useState } from 'react';
import Input from './ui/Input';
// import logo from '../../public/logo.png'

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-background  border-b">
      {/* Logo Left */}
      <div className="flex items-center space-x-2">
        <img src="/logomark.png" alt="Quotient Logo" className="h-8 w-auto" />
        <h2 className="text-lg font-semibold text-primary">
          Quotient
        </h2>
      </div>

      {/* Search Center */}
      <div className="w-1/3 relative ">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input placeholder="Search" className="pl-10 bg-background" />
      </div>

      {/* Right login Actions */}
      <div className="flex items-center space-x-4">
        <div onClick={toggleTheme} className="cursor-pointer">
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-primary" />
          ) : (
            <Sun className="w-5 h-5 text-primary" />
          )}
        </div>
        <div className="relative">
          <button
            className="
        p-2 
        rounded-xl 
        bg-background 
        shadow-md
        text-primary
        transition 
        flex items-center justify-center
      "
          >
            <Bell className="h-5 w-5" />
          </button>

        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-foreground text-white w-8 h-8 flex items-center justify-center text-sm font-semibold">MS</div>
          <div className="text-sm">
            <div className="font-medium text-primary">Manoj Sharma</div>
            <div className="text-gray-400 text-sm">Super Admin</div>
          </div>
          <div className="text-primary cursor-pointer"><ChevronDown className='text-xs' /></div>
        </div>
      </div>
    </div>
  );
}