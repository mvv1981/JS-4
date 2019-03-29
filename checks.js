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

assert.deepEqual(
    getHashTags('Строка но без хештегов'), [], 'Строка не содержит хештегов');


assert.deepEqual(
        getHashTags('Строка с хештегом # выглядит # так'), [], 'Пустой хештег');
    
assert.deepEqual(
    getHashTags('Строка с хештегом # выглядит #привет_буфет так'), ['привет_буфет'], 'Пустой хештег и "привет_буфет"');
    

console.info('OK!');
