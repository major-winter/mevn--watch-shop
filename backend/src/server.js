const app = require('./app')

// static folder
const publicDir = path.join(__dirname, '../public')
const spaDir = path.join(__dirname, '../public', 'index.html')
app.use(express.static(publicDir))

// Handle SPA
app.get('/*', (req, res) => res.sendFile(spaDir))


const port = process.env.PORT || 5005

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})