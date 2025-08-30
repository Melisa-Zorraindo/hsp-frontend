import { useState } from "react";
import Checkbox from "./components/checkbox";
import Select from "./components/select";
import { STOCKS, START, END, MONTHS } from "./constants/appData.ts";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {};
let data = {
  labels: [
    "2025-07-31",
    "2025-06-30",
    "2025-05-30",
    "2025-04-30",
    "2025-03-31",
    "2025-02-28",
    "2025-01-31",
    "2024-12-31",
    "2024-11-29",
    "2024-10-31",
    "2024-09-30",
  ],
  datasets: [
    {
      label: "Prices",
      data: [
        "207.3327",
        "204.9355",
        "200.6204",
        "211.9956",
        "221.6027",
        "241.2659",
        "235.1815",
        "249.5515",
        "236.5069",
        "224.8788",
        "231.9365",
      ],
      // borderColor: "#26c6da",
      // borderColor: "#9ae600",
      // borderColor: "#ff8904",
      borderColor: "#c27aff",
    },
  ],
};

data = {
  labels: data.labels
    .map((l) => {
      const [year, month] = l.split("-");
      return `${month}-${year}`;
    })
    .reverse(),
  datasets: data.datasets.map((ds) => ({
    ...ds,
    data: [...ds.data].reverse(),
  })),
};

type MonthYear = {
  year: number | null;
  month: string | null;
};

function App() {
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<MonthYear>({
    year: null,
    month: null,
  });
  const [endDate, setEndDate] = useState<MonthYear>({
    year: null,
    month: null,
  });

  const handleCheckboxChange = (id: string) => {
    setSelectedStocks((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const stockCountValid =
    selectedStocks.length >= 1 && selectedStocks.length <= 3;

  const handleSelectChange = (value: string | number, id: string) => {
    const [period, unit] = id.split("-");

    if (period === "from") {
      setStartDate((prev) => ({ ...prev, [unit]: value }));
    } else {
      setEndDate((prev) => ({ ...prev, [unit]: value }));
    }
  };

  const present = new Date();

  const datesValid =
    startDate.year &&
    startDate.month &&
    endDate.year &&
    endDate.month &&
    new Date(startDate.year, MONTHS.indexOf(startDate.month), 1) <
      new Date(endDate.year, MONTHS.indexOf(startDate.month), 1) &&
    new Date(endDate.year, MONTHS.indexOf(endDate.month), 0) <= present;

  const isValid = stockCountValid && datesValid;

  return (
    <>
      <div className="text-center text-slate-700">
        <h1 className="text-5xl tracking-tight sm:text-6xl font-bold">
          Historical stock prices
        </h1>
        <p className="py-5">
          Analyse and compare stock performance across different time periods.
          Select up to three technology stocks to visualise their price
          movements.
        </p>
      </div>
      <form action="">
        <h2 className="pb-3 text-slate-700 border-b-2 border-slate-300 mb-5 uppercase font-bold">
          Select stocks
        </h2>
        <div
          className={`${
            stockCountValid
              ? "text-emerald-950 bg-emerald-100 border-l-emerald-400"
              : "text-red-950 bg-red-100 border-l-red-400"
          } border-l-3 rounded pl-2 py-1 my-8`}
        >
          {selectedStocks.length} of 3 stocks selected
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-5">
          {STOCKS.map(({ name, id, label }) => (
            <Checkbox
              key={id}
              name={name}
              id={id}
              label={label}
              checked={selectedStocks.includes(id)}
              disabled={
                !selectedStocks.includes(id) && selectedStocks.length >= 3
              }
              onChange={() => handleCheckboxChange(id)}
            />
          ))}
        </div>
        <h2 className="pb-3 text-slate-700 border-b-2 border-slate-300 mt-8 mb-5 uppercase font-bold">
          Date range
        </h2>
        <div className="md:flex md:flex-row md:justify-between text-slate-700">
          <div className="flex flex-col">
            <label htmlFor="from" className="uppercase font-bold mb-1">
              From
            </label>
            <div className="flex flex-row gap-2">
              {START.map(({ name, id, values }) => (
                <Select
                  key={`start-${id}`}
                  name={name}
                  id={id}
                  values={values}
                  unit={id.split("-")[1]}
                  valid={datesValid}
                  onChange={(value) => handleSelectChange(value, id)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="uppercase font-bold mb-1">
              To
            </label>
            <div className="flex flex-row gap-2">
              {END.map(({ name, id, values }) => (
                <Select
                  key={`end-${id}`}
                  name={name}
                  id={id}
                  values={values}
                  unit={id.split("-")[1]}
                  valid={datesValid}
                  onChange={(value) => handleSelectChange(value, id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            disabled={!isValid}
            className={`rounded-md py-3 px-22 uppercase ${
              isValid
                ? "bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-700"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Fetch data
          </button>
        </div>
      </form>
      <div className="mt-20">
        <Line options={options} data={data} />
      </div>
    </>
  );
}

export default App;
