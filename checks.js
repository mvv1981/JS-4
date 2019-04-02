console.info('Барабаш Максим Сергеевич');
// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #pravo по #javascript'),
    ['pravo', 'javascript'],
    'Строка "Прохожу курс на #pravo по #javascript"' +
    ' должна содержать хэштеги "pravo, javascript"'
);

console.info('OK!');
