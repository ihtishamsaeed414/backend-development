let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

// @desc GET all the post
// @route GET /api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

// @desc GET single post
// @route GET /appi/posts:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found!`);
    error.status = 404; //error objext has a status property
    return next(error);
  }
  res.status(200).json(post);
};

// @desc create new post
// @route POST /appi/posts
export const createPost = (req, res, next) => {
  //   console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc update post
// @route PUT /appi/posts
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found!`);
    error.status = 400; //error objext has a status property
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc  Delete post
// @route DELETE /appi/posts

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);

  let post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found!`);
    error.status = 400;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
