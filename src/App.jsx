import { useState } from "react";

function App() {
  const [date, setdate] = useState("");
  const [result, setresult] = useState("");

  const calculateAge = () => {
    let birthDate = new Date(date);

    if (!date) {
      setresult("⚠️ Please select a valid date!");
      return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayName = days[birthDate.getDay()];

    let ageResult = `🎉 You are ${y3} years, ${m3} months and ${d3} days old.
You were born on a ${dayName}.`;

    // countdown
    let nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let diff = nextBirthday - today;
    let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

    ageResult += `\n🎂 Your birthday is coming in ${daysLeft} days.`;

    setresult(ageResult);
  };

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#4203a9] to-[#90bafc] flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-[600px] bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight text-center sm:text-left">
          React <br /> <span className="text-[#ffff70]">Age Calculator</span>
        </h1>

        {/* Input + Button */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-7 bg-[#bad5f6] rounded-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setdate(e.target.value)}
            className="w-full p-2 rounded-lg text-base sm:text-lg font-mono outline-0 border-0 shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-white"
          />
          <button
            onClick={calculateAge}
            className="w-full sm:w-auto bg-[#ffff76] border-0 outline-0 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold text-[#333] cursor-pointer transition-all duration-300 ease-in hover:bg-[#b7afaf] hover:text-black transform hover:scale-105 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
          >
            Calculate
          </button>
        </div>

        {/* Result */}
        {result && (
          <p className="mt-6 text-lg sm:text-xl text-[#ffff70] whitespace-pre-line text-center sm:text-left">
            {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
