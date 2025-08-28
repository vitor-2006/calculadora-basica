import express from 'express'

const app = express();
const port = 3000;

app.use(express.json());

app.post('/soma', (req, res) => {
    const {numA, numB} = req.body
    res.send(numA + numB)
})

app.post('/subtracao', (req, res) =>{
    const {numA, numB} = req.body
    res.send(numA - numB)
})

app.post('/multiplicacao', (req, res) => {
    const {numA, numB} = req.body
    res.send(numA * numB)
})

app.post('/divisao', (req, res) => {
    const {numA, numB} = req.body
    res.send(numA / numB)
})
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});