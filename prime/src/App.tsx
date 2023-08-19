import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

function App() {
  const [dates, setDates] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-slate-400 min-h-screen w-full text-white flex items-center justify-center flex-col gap-y-5">
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
      />
      <Checkbox
        icon={<div className="bg-yellow-500 w-2 h-2 rounded"></div>}
        onChange={(e) => setChecked(e.checked)}
        checked={checked}
      ></Checkbox>
    </div>
  );
}

export default App;
