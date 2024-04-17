const express = require('express');
const router = express.Router();

// Mock database for authors
let authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "George R.R. Martin" }
];

// CREATE Author
router.post('/', (req, res) => {
    const { name } = req.body;
    const newAuthor = { id: authors.length + 1, name };
    authors.push(newAuthor);
    res.status(201).send(newAuthor);
});

// READ All Authors
router.get('/', (req, res) => {
    res.send(authors);
});

// READ Single Author
router.get('/:id', (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.id));
    if (!author) return res.status(404).send('Author not found.');
    res.send(author);
});

// UPDATE Author
router.put('/:id', (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.id));
    if (!author) return res.status(404).send('Author not found.');
    author.name = req.body.name;
    res.send(author);
});

// DELETE Author
router.delete('/:id', (req, res) => {
    authors = authors.filter(a => a.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;