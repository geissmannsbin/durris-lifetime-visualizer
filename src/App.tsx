import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const [screenTime, setScreenTime] = useState(0);
  const [hoursOfSleep, setHoursOfSleep] = useState(0);
  const [workHours, setWorkHours] = useState(0);

  const getStats = () => {
    const weeksInYear = 52;
    const lifeExpectancy = 82;

    const weeksLeft = Math.max((lifeExpectancy - age) * weeksInYear, 0);
    const sleepHoursPerWeek = hoursOfSleep * 7;
    const screenHoursPerWeek = screenTime * 7;
    const totalHoursInWeek = 24 * 7;

    const weeksSleeping = Math.round(
      (sleepHoursPerWeek / totalHoursInWeek) * weeksLeft
    );
    const weeksOnScreen = Math.round(
      (screenHoursPerWeek / totalHoursInWeek) * weeksLeft
    );
    const weeksWorking = Math.round((workHours / totalHoursInWeek) * weeksLeft);
    const weeksOther = Math.round(
      weeksLeft - weeksSleeping - weeksOnScreen - weeksWorking
    );

    return {
      weeksLeft,
      weeksSleeping,
      weeksOnScreen,
      weeksWorking,
      weeksOther,
    };
  };

  const { weeksLeft, weeksSleeping, weeksOnScreen, weeksWorking, weeksOther } =
    getStats();

  const generateWeeksGrid = () => {
    const weeksArray = [
      ...Array(weeksSleeping).fill('blue'),
      ...Array(weeksOnScreen).fill('red'),
      ...Array(weeksWorking).fill('orange'),
      ...Array(weeksOther).fill('green'),
    ];
    return weeksArray;
  };

  const weeksGrid = generateWeeksGrid();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Duris Life Time Visualization</h1>
      <h2>(vell spass demet boy)</h2>

      <div style={{ marginBottom: '20px' }}>
        <div>
          <p>Age</p>
          <input
            type="number"
            onChange={(e) => setAge(+e.target.value)}
            value={age}
          />
        </div>
        <div>
          <p>ScreenTime in hours</p>
          <input
            type="number"
            onChange={(e) => setScreenTime(+e.target.value)}
            value={screenTime}
          />
        </div>
        <div>
          <p>Hours Of Sleep</p>
          <input
            type="number"
            onChange={(e) => setHoursOfSleep(+e.target.value)}
            value={hoursOfSleep}
          />
        </div>
        <div>
          <p>Work Hours per Week</p>
          <input
            type="number"
            onChange={(e) => setWorkHours(+e.target.value)}
            value={workHours}
          />
        </div>
      </div>
      <div>
        <p>Total Weeks Left: {weeksLeft}</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(52, 4px)',
          gap: '1px',
          marginTop: '20px',
        }}
      >
        {weeksGrid.map((color, index) => (
          <div
            key={index}
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
      <div>
        <p>Weeks Sleeping: {weeksSleeping}</p>
        <p>Weeks on Screen: {weeksOnScreen}</p>
        <p>Weeks Working: {weeksWorking}</p>
        <p>Weeks for Other Activities: {weeksOther}</p>
      </div>
    </div>
  );
}

export default App;