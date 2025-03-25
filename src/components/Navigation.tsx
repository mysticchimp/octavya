import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  LineChart,
  GitCompareArrows,
  MessagesSquare,
  GraduationCap,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { href: "/", label: "Dashboard", icon: BarChart3 },
    { href: "/compare", label: "Compare", icon: GitCompareArrows },
    { href: "/negotiation", label: "Negotiation", icon: MessagesSquare },
    { href: "/career-path", label: "Career Path", icon: GraduationCap },
  ];

  const handleSignOut = () => {
    // Here you would typically clear any auth tokens, user data, etc.
    toast.success("Successfully signed out!");
    navigate("/signin");
  };

  return (
    <div className="h-full">
      <nav
        className={cn(
          "fixed left-0 top-0 h-screen bg-gray-100 transition-all duration-300 border-r z-50",
          isExpanded ? "w-64" : "w-16"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-center">
            {isExpanded ? (
              <span className="text-lg font-semibold">Menu</span>
            ) : (
              <LineChart className="h-6 w-6" />
            )}
          </div>
          <ul className="space-y-2 mt-4 flex-1">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={cn(
                    "flex items-center px-2 py-2 rounded-lg transition-colors",
                    "hover:bg-gray-200",
                    location.pathname === href ? "bg-gray-200" : ""
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {isExpanded && <span className="ml-3">{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4 border-t">
            <Button
              variant="ghost"
              className={cn(
                "w-full flex items-center px-2 py-2 rounded-lg transition-colors",
                "hover:bg-gray-200 text-red-600 hover:text-red-700"
              )}
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              {isExpanded && <span className="ml-3">Sign Out</span>}
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}