export default (req, res) => {
    if (req.method === 'POST') {
      // Process a POST request
    } else {
        res.json({ name: 'John Doe' })
    }
}