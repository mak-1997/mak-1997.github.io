import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function GithubCalendar({ username }) {
  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    async function fetchContributionData() {
      const response = await fetch(`https://api.github.com/users/${username}/events`);
      const data = await response.json();
      const contributionData = parseContributionData(data);
      setContributionData(contributionData);
    }
    fetchContributionData();
  }, [username]);

  function parseContributionData(data) {
    const contributions = {};
    data.forEach(event => {
      if (event.type === 'PushEvent') {
        const date = new Date(event.created_at).toISOString().substring(0, 10);
        if (contributions[date]) {
          contributions[date]++;
        } else {
          contributions[date] = 1;
        }
      }
    });
    return Object.entries(contributions).map(([date, count]) => ({
      date,
      count,
    }));
  }

  return (
    <div>
      <h2>Github Contributions</h2>
      <CalendarHeatmap
        startDate={new Date('2022-01-01')}
        endDate={new Date()}
        values={contributionData}
      />
    </div>
  );
}

export default GithubCalendar;
