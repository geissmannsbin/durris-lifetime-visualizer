import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [screenTime, setScreenTime] = useState<number | undefined>(undefined);
  const [hoursOfSleep, setHoursOfSleep] = useState<number | undefined>(
    undefined
  );
  const [workHours, setWorkHours] = useState<number | undefined>(undefined);

  const getStats = () => {
    const weeksInYear = 52;
    const lifeExpectancy = 82;

    const sanitizedAge = age || 0;
    const sanitizedScreenTime = screenTime || 0;
    const sanitizedSleepHours = hoursOfSleep || 0;
    const sanitizedWorkHours = workHours || 0;

    const weeksLeft = Math.max(
      (lifeExpectancy - sanitizedAge) * weeksInYear,
      0
    );
    const sleepHoursPerWeek = sanitizedSleepHours * 7;
    const screenHoursPerWeek = sanitizedScreenTime * 7;
    const totalHoursInWeek = 24 * 7;

    const weeksSleeping = Math.round(
      (sleepHoursPerWeek / totalHoursInWeek) * weeksLeft
    );
    const weeksOnScreen = Math.round(
      (screenHoursPerWeek / totalHoursInWeek) * weeksLeft
    );
    const weeksWorking = Math.round(
      (sanitizedWorkHours / totalHoursInWeek) * weeksLeft
    );
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
      <h1>Life Time Visualization</h1>
      <div style={{ marginBottom: '20px' }}>
        <div>
          <p>Age</p>
          <input
            type="number"
            onChange={(e) =>
              setAge(e.target.value ? parseInt(e.target.value, 10) : undefined)
            }
            value={age ?? ''}
          />
        </div>
        <div>
          <p>ScreenTime in hours</p>
          <input
            type="number"
            onChange={(e) =>
              setScreenTime(
                e.target.value ? parseInt(e.target.value, 10) : undefined
              )
            }
            value={screenTime ?? ''}
          />
        </div>
        <div>
          <p>Hours Of Sleep</p>
          <input
            type="number"
            onChange={(e) =>
              setHoursOfSleep(
                e.target.value ? parseInt(e.target.value, 10) : undefined
              )
            }
            value={hoursOfSleep ?? ''}
          />
        </div>
        <div>
          <p>Work Hours per Week</p>
          <input
            type="number"
            onChange={(e) =>
              setWorkHours(
                e.target.value ? parseInt(e.target.value, 10) : undefined
              )
            }
            value={workHours ?? ''}
          />
        </div>
      </div>
      <div>
        <p>Total Weeks Left: {weeksLeft}</p>
        <p>Weeks Sleeping: {weeksSleeping}</p>
        <p>Weeks on Screen: {weeksOnScreen}</p>
        <p>Weeks Working: {weeksWorking}</p>
        <p>Weeks for Other Activities: {weeksOther}</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(52, 2px)',
          gap: '1px',
          marginTop: '20px',
        }}
      >
        {weeksGrid.map((color, index) => (
          <div
            key={index}
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
