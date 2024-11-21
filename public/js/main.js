const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");

// Get and show the posts

async function showPosts() {
  try {
    const res = await fetch("http://localhost:8080/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await res.json();
    // to begin with posts on the UI
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

// Event Listeners
button.addEventListener("click", showPosts);
