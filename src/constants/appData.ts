interface Stocks {
  key: string;
  name: string;
  id: string;
  label: string;
}

interface DateRange {
  name: string;
  id: "from-month" | "from-year" | "to-month" | "to-year";
  values: string[] | number[];
}
export const STOCKS: Stocks[] = [
  { key: "AAPL", name: "apple", id: "AAPL", label: "Apple" },
  { key: "AMD", name: "amd", id: "AMD", label: "AMD" },
  { key: "AMZN", name: "amazon", id: "AMZN", label: "Amazon" },
  { key: "AVGO", name: "broadcom", id: "AVGO", label: "Broadcom" },
  { key: "CSCO", name: "cisco", id: "CSCO", label: "Cisco" },
  { key: "GOOG", name: "google", id: "GOOG", label: "Google" },
  { key: "META", name: "meta", id: "META", label: "Meta" },
  { key: "MSFT", name: "microsoft", id: "MSFT", label: "Microsoft" },
  { key: "NFLX", name: "netflix", id: "NFLX", label: "Netflix" },
  { key: "NVDA", name: "nvidia", id: "NVDA", label: "NVIDIA" },
  { key: "ORCL", name: "oracle", id: "ORCL", label: "Oracle" },
  { key: "PLTR", name: "palantir", id: "PLTR", label: "Palantir" },
  { key: "SAP", name: "sap", id: "SAP", label: "SAP" },
  { key: "TSLA", name: "tesla", id: "TSLA", label: "Tesla" },
  { key: "TSM", name: "tsmc", id: "TSM", label: "TSMC" },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const YEARS = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
  1999,
];

export const START: DateRange[] = [
  { name: "from-month", id: "from-month", values: MONTHS },
  { name: "from-year", id: "from-year", values: YEARS },
];

export const END: DateRange[] = [
  { name: "to-month", id: "to-month", values: MONTHS },
  { name: "to-year", id: "to-year", values: YEARS },
];
