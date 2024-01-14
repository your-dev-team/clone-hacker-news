const db = require('./database');
const User = require('./classes/User');
const News = require('./classes/News');
const Comment = require('./classes/Comment');

async function seed() {
  // Users
  const users = [
    new User({
      id: 1,
      name: 'John Doe',
      password: 'password',
    }),
    new User({
      id: 2,
      name: 'Jane',
      password: 'password',
    }),
  ];

  for (let user of users) {
    await db.createUser(user);
  }

  // News
  const news = [
    new News({
      id: 1,
      title: 'News 1',
      content: 'This is news 1',
      author: users[0].id,
    }),
    new News({
      id: 2,
      title: 'News 2',
      content: 'This is news 2',
      author: users[1].id,
    }),
  ];

  for (let newsItem of news) {
    await db.createNews(newsItem);
  }

  // Comments
  const comments = [
    new Comment({
      id: 1,
      content: 'This is a comment on news 1 by user 1',
      userId: users[0].id,
      newsId: news[0].id,
    }),
    new Comment({
      id: 2,
      content: 'This is a comment on news 2 by user 2',
      userId: users[1].id,
      newsId: news[1].id,
    }),
  ];

  for (let comment of comments) {
    await db.createComment(comment);
  }
}

seed()
  .then(() => {
    console.log('Database seeded successfully');
  })
  .catch((error) => {
    console.error('Error occurred while seeding the database', error);
  });
