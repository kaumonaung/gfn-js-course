const express = require('express');
const app = express();
const PORT = 3000;

const posts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
  },
];

app.use(express.json());

// GET (Read)
app.get('/posts', (req, res) => {
  res.status(200).json({
    posts: posts,
  });
});

// POST (Create)
app.post('/posts', (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({
      message: 'Title and body are required',
    });
  }

  const id = new Date().getTime();

  const newPost = {
    id: id,
    title: title,
    body: body,
  };

  posts.push(newPost);

  res.status(201).json({
    message: 'Post created successfully',
    newPost: newPost,
  });
});

// PUT (Update)
app.put('/posts/:id', (req, res) => {
  const { id } = req.params; // => als string
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({
      message: 'Title and body are required',
    });
  }

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  post.title = title;
  post.body = body;

  res.status(200).json({
    message: 'Post updated successfully',
    updatedPost: post,
  });
});

// DELETE (Delete)
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  // Entfernen den Post von der "posts" Array
  posts.splice(posts.indexOf(post), 1);

  res.status(200).json({
    message: 'Post deleted successfully',
    posts: posts,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
