const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); 

if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}


const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

let inventory = [
    {
        id: "1",
        inventory_name: "Приклад товару",
        description: "Це опис тестового товару",
        photo: `http://localhost:${PORT}/uploads/default.jpg`
    }
];


app.get('/inventory', (req, res) => {
    res.json(inventory);
});

app.get('/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === req.params.id);
    item ? res.json(item) : res.status(404).send('Не знайдено');
});


app.post('/register', upload.single('photo'), (req, res) => {
    const { inventory_name, description } = req.body;
    
    if (!inventory_name) {
        return res.status(400).send('Назва обов’язкова');
    }

    const newItem = {
        id: uuidv4(),
        inventory_name,
        description,
        photo: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : ''
    };
    
    inventory.push(newItem);
    res.status(201).json(newItem);
});

app.put('/inventory/:id', (req, res) => {
    const { inventory_name, description } = req.body;
    const index = inventory.findIndex(i => i.id === req.params.id);
    
    if (index !== -1) {
        inventory[index] = { ...inventory[index], inventory_name, description };
        res.json(inventory[index]);
    } else {
        res.status(404).send('Не знайдено');
    }
});

app.put('/inventory/:id/photo', upload.single('photo'), (req, res) => {
    const index = inventory.findIndex(i => i.id === req.params.id);
    
    if (index !== -1 && req.file) {
        inventory[index].photo = `http://localhost:${PORT}/uploads/${req.file.filename}`;
        res.json(inventory[index]);
    } else {
        res.status(404).send('Помилка завантаження');
    }
});

app.delete('/inventory/:id', (req, res) => {
    inventory = inventory.filter(i => i.id !== req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Бекенд запущено на http://localhost:${PORT}`);
});