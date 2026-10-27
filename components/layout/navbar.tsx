import Link from "next/link";
import { ThemeToggle } from "../shared/theme-toggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          MyApp
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
