import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-bold font-mono text-foreground hover:text-accent transition-colors"
          >
            ALEX CARDOSO DE OLIVEIRA
          </NavLink>
          
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              CV
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              EDUCATION
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              CERTIFICATIONS
            </NavLink>
            <NavLink
              to="/additional"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              ADDITIONAL
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive ? "text-accent border-b-2 border-accent pb-1" : "text-foreground"
                )
              }
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;