const Posts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
    { id: 3, title: "Post 3", content: "Content 3" },
  ];
  
  const listPosts = () => {
    Posts.map((Post) => {
      console.log(Post.title + " "+ Post.content);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      Posts.push(newPost);
      resolve(Posts);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showPosts() {
    try {
      await addPost({ id:4, title: "Post 4", content: "Content 4" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();