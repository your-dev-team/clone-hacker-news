const express = require('express');
const app = express();
const userRoutes = require('./user');
const newsRoutes = require('./news');
const commentRoutes = require('./comment');

app.use(express.json());
app.use('/news', newsRoutes);
app.use('/user', userRoutes);
app.use('/comment', commentRoutes);

// Add redirect for '/' to '/news'
app.get('/', (req, res) => {
  res.redirect('/news');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port} :tada:`));
