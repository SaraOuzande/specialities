const express = require('express');
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

function getUsersBySpecialty(specialty) {
    return usersData.filter(user => user.specialty === specialty);
}

function generatePage(specialty) {
    const users = getUsersBySpecialty(specialty);
    const userList = users.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');
    return `
        <h1>Usuarios de ${specialty.charAt(0).toUpperCase() + specialty.slice(1)}</h1>
        <p>Total de usuarios: ${users.length}</p>
        <ul>${userList}</ul>
        <a href="/">Volver al inicio</a>
    `;
}

app.get('/', (req, res) => {
    res.send(`
        <h1>Página Principal</h1>
        <p><a href="/marketing">Marketing</a></p>
        <p><a href="/developers">Developers</a></p>
        <p><a href="/QAs">QAs</a></p>
        <p><a href="/ventas">Ventas</a></p>
    `);
});

app.get('/marketing', (req, res) => {
    res.send(generatePage('marketing'));
});

app.get('/developers', (req, res) => {
    res.send(generatePage('developers'));
});

app.get('/QAs', (req, res) => {
    res.send(generatePage('QAs'));
});

app.get('/ventas', (req, res) => {
    res.send(generatePage('ventas'));
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1><a href="/">Volver al inicio</a>');
});

app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});
