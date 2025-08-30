import type { JSX } from "react";

export default function Select({
  name,
  id,
  values,
}: {
  name: string;
  id: string;
  values: (string | number)[];
}): JSX.Element {
  return (
    <select
      name={name}
      id={id}
      className="border-2 border-slate-300 rounded-md py-2 pl-2 pr-16 md:pr-22 xl:pr-36 mb-5 text-sm text-start"
    >
      {values.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}
