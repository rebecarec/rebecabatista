import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface NavDropdownProps {
  buttonClassName: string;
  iconClassName?: string;
}

const NavDropdown = ({ buttonClassName, iconClassName = "h-4 w-4" }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Menu"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={buttonClassName}
      >
        <Menu className={iconClassName} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-md border border-border bg-background py-1 shadow-soft">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-primary transition-colors hover:bg-secondary"
          >
            Home
          </Link>
          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-primary transition-colors hover:bg-secondary"
          >
            Cases
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
