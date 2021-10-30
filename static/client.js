socket.on('get room', (roomNumber) => {
    console.log(`joined room ${roomNumber}`);
});

socket.on('join room', () => {
    console.log('another user joined');
});

const createRoom = () => {
    socket.emit('create room');
};

const joinRoom = () => {
    const roomNumber = document.getElementById('roomNumber').value;
    socket.emit('join room', roomNumber);
};