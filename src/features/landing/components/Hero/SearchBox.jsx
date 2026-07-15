import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="mt-8 rounded-2xl bg-white p-4 shadow-xl lg:mt-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <select className="w-full rounded-xl border border-slate-200 p-3">
          <option>Select Service</option>

          <option>Electrician</option>

          <option>Plumber</option>

          <option>Carpenter</option>

          <option>Painter</option>
        </select>

        <select className="w-full rounded-xl border border-slate-200 p-3">
          <option>Select Location</option>

          <option>Hyderabad</option>

          <option>Bangalore</option>

          <option>Chennai</option>
        </select>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700">
          <Search size={18} />
          Find Worker
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
