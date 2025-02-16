document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');
    const events = [
        { date: '2025-02-22', event: 'Football: Trelleborgs FF vs AIK' },
        // Add more events here
    ];

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.date} - ${event.event}`;
        eventList.appendChild(listItem);
    });
});
