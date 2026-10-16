import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  allLabel: string;
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  icon?: ReactNode;
}

const FilterDropdown = ({
  label,
  allLabel,
  options,
  selected,
  onSelect,
  icon,
}: FilterDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
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
      <Button
        type="button"
        variant={selected ? "default" : "secondary"}
        size="sm"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {icon}
        {options.find((option) => option.value === selected)?.label ?? label}
        <ChevronDown className="h-3.5 w-3.5" />
      </Button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-md border border-border bg-background py-1 shadow-soft">
          <button
            type="button"
            onClick={() => {
              onSelect("");
              setOpen(false);
            }}
            className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${selected === "" ? "bg-secondary font-medium text-primary" : "text-primary"}`}
          >
            {allLabel}
          </button>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onSelect(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${selected === option.value ? "bg-secondary font-medium text-primary" : "text-primary"}`}
            >
              <span>{option.label}</span>
              {selected === option.value && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
