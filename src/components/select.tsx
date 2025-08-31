import type { JSX } from "react";

export default function Select({
  name,
  id,
  values,
  unit,
  valid,
  onChange,
}: {
  name: string;
  id: string;
  values: (string | number)[];
  unit: string;
  valid: boolean | null | 0 | "";
  onChange: (key: string) => void;
}): JSX.Element {
  const getBorderClass = () => {
    switch (valid) {
      case false:
        return "border-red-300";
      case true:
        return "border-emerald-200";
      default:
        return "border-slate-300";
    }
  };
  return (
    <select
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      className={`border-2 ${getBorderClass()} rounded-md py-2 pl-2 xs:pr-18 sm:pr-22 xl:pr-36 mb-5 text-sm text-start`}
    >
      <option value="select">
        {unit.charAt(0).toUpperCase() + unit.slice(1)}
      </option>
      {values.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}
