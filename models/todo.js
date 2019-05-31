var todos = [
    {todo: 'Check mail', done: false},
    {todo: 'Bathe dogs', done: true},
    {todo: 'Grocery store', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return todos;
}

function getOne(id) {
    return todos[id];
}
