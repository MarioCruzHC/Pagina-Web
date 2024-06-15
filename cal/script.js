document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Año Nuevo',
                start: '2024-01-01'
            },
            {
                title: 'Día de la Constitución',
                start: '2024-02-05'
            },
            {
                title: 'Natalicio de Benito Juárez',
                start: '2024-03-18'
            }
            // Agrega más días festivos aquí según sea necesario
        ]
    });

    calendar.render();
});
