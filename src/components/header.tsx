import { Home, Pizza, Utensils } from "lucide-react";

import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-4">
        <Pizza className="size-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="size-4" />
            Dashboard
          </NavLink>
          <NavLink to="/pedidos">
            <Utensils className="size-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
