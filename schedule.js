document.addEventListener('DOMContentLoaded', function() {
    const matchList = document.getElementById('matchList');
    const matches = [
        { date: '2023-10-01', time: '18:00', teams: 'Team A vs Team B' },
        { date: '2023-10-02', time: '20:00', teams: 'Team C vs Team D' },
        { date: '2023-10-03', time: '16:00', teams: 'Team E vs Team F' },
        { date: '2023-10-04', time: '19:00', teams: 'Team G vs Team H' },
        { date: '2023-10-05', time: '21:00', teams: 'Team I vs Team J' },
        // Add more matches here
    ];

    matches.forEach(match => {
        const listItem = document.createElement('li');
        listItem.textContent = `${match.date} - ${match.time} - ${match.teams}`;
        matchList.appendChild(listItem);
    });
});
