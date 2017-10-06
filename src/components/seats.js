import React from 'react';
import Seatmap from 'react-seatmap';
React.render(
    <Seatmap rows={rows} maxReservableSeats={3} alpha />,
    document.getElementById('app1')
);
