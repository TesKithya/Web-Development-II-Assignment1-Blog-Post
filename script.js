let initialpost = [
    {id:1, title:"My First Blog Post", content:"This is the content of my first blog post."},
    {id:2, title:"My Second Blog Post", content:"This is the content of my second blog post."},
    {id:3, title:"My Third Blog Post", content:"This is the content of my third blog post."}
]

let nextid = 4
const posts = document.getElementById("posts")
const addBtn = document.getElementById("addBtn")

function createPost() {
    posts.innerHTML = ""
    initialpost.forEach((post) => {
        const postDiv = document.createElement("div")
        postDiv.classList.add("post")
        postDiv.setAttribute("data-id", post.id)

        const title = document.createElement("h2")
        title.textContent = post.title
        
        const content = document.createElement("p")
        content.textContent = post.content

        
        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.addEventListener("click", (e) => {
            const newTitle = prompt("Enter the new title of your blog post:", post.title)
            const newContent = prompt("Enter the new content of your blog post:", post.content)
            if (newTitle){post.title = newTitle}
            if (newContent){post.content = newContent}
            createPost()
        })

        title.addEventListener("dblclick", (e) => {
            const newTitle = prompt("Enter the new title of your blog post:", post.title)
            if (newTitle){post.title = newTitle}
            createPost()
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", (e) => {
            deletePost(e.target.parentElement)
        })

        postDiv.appendChild(title)
        postDiv.appendChild(content)
        postDiv.appendChild(editBtn)
        postDiv.appendChild(deleteBtn)
        posts.appendChild(postDiv)
    }
    )
}


const addPost = () => {
    const title = prompt("Enter the title of your blog post:")
    const content = prompt("Enter the content of your blog post:")
    if (title && content) {
        initialpost.push({id: nextid, title: title, content: content})
        nextid++
        createPost()
    }
}

const deletePost = (target) => {
    const postId = target.getAttribute("data-id")
    const postTitle = target.querySelector("h2").textContent
    const toDelete = confirm(`Are you sure you want to delete "${postTitle}"?`)
    if (toDelete) {
        initialpost = initialpost.filter(post => post.id != postId)
        createPost()
        alert(`Post "${postTitle}" deleted successfully`)
    }
}

addBtn.addEventListener("click", addPost)
createPost()