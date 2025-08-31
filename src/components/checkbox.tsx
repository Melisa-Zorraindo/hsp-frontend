import type { JSX } from "react";

export default function Checkbox({
  name,
  id,
  label,
  checked,
  disabled = false,
  onChange,
}: {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (id: string) => void;
}): JSX.Element {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className={`font-bold border-2 rounded-md py-2 text-center text-slate-700 transition-colors duration-200
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}
          ${
            checked
              ? "bg-blue-100 border-blue-300"
              : "border-slate-300 bg-slate-50 hover:border-blue-200 hover:bg-blue-50"
          }
        `}
      >
        {label}
        <div>
          <input
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            disabled={disabled}
            onChange={() => onChange(id)}
            className="hidden"
          />
          <span className="font-light text-xs text-slate-500">{id}</span>
        </div>
      </label>
    </div>
  );
}
