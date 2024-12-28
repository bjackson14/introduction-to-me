const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "/assets/imgs/avatar-vangogh.jpg",
      post: "/assets/imgs/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "/assets/imgs/avatar-courbet.jpg",
      post: "/assets/imgs/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "/assets/imgs/avatar-ducreux.jpg",
      post: "/assets/imgs/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const main = document.getElementById('main');
for (let i = 0; i < posts.length; i++) {
  main.innerHTML += `
    <section>
      <div class="user-info">
        <img class="user" src="${posts[i].avatar}" alt="Avatar of ${posts[i].name}" />
        <div>
          <p class="name">${posts[i].name}</p>
          <p class="location">${posts[i].location}</p>
        </div>
      </div>
      <img class="post" src="${posts[i].post}" alt="Post by ${posts[i].name}" />
      <div class="footer">
        <img class="icon" src="/assets/imgs/icon-heart.png" alt="Heart icon" />
        <img class="icon" src="/assets/imgs/icon-comment.png" alt="Comment icon" />
        <img class="icon" src="/assets/imgs/icon-dm.png" alt="Direct Message icon" />
        <p class="likes">${posts[i].likes} likes</p>
        <p class="comment-name">${posts[i].username} <span class="comment">${posts[i].comment}</span></p>
      </div>
    </section>
  `
}