# Blog Post Application

A small web app for managing blog posts. It works like a To-Do list, but each item is a blog post with a title and content.

**Name:** Kithya TES
**Course / Assignment:** INFO 251 001 - Web Development II - Assignment 1 - Blog Post

## Features

- Starts with 3 initial blog posts
- **Add** a new blog post (title and content)
- **Edit** a post's title and content (Edit button, or double-click a title to edit only the title)
- **Delete** a post, with a confirmation message first

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure: heading, "Add Blog Post" button and an empty container for the posts |
| `style.css` | Two-column grid layout and post card styling |
| `script.js` | Data, drawing the posts, add, edit and delete |

## How I Built It

1. Created the HTML skeleton with an Add button and an empty `<div id="posts">`.
2. Stored the initial posts in an array of objects (`id`, `title`, `content`) with a `nextid` counter for new posts.
3. Wrote one function (`createPost`) that clears the container and builds a card for every post in the array.
4. Added `addPost`, the Edit button and `deletePost`. Each one changes the array and then redraws the posts.
5. Styled the page with CSS grid.

## What I Used

HTML5, CSS3 (grid) and vanilla JavaScript (DOM manipulation, `forEach`, `filter`, `prompt`, `confirm`, event listeners).

## References

- **Professor's To-Do List example (`script.js`).** I followed its structure: creating elements with `document.createElement`, attaching `addEventListener` to the buttons, a double-click on the text to edit it, `prompt` for input, and `confirm` and `alert` messages when deleting. The difference is that my version keeps the posts in an array and redraws the list after each change, while the To-Do example edits the page elements directly.
- **Claude (AI assistant by Anthropic).** I used it as a reference to guide me on how to begin, clarify my concepts which I didn't comprehend like functions versus const, variable scope, and what prompt returns when it is cancelled. It also helped me fix the logic of the edits to make sure the Cancel keeps the old value.
- Layout reference: the example screenshot provided with the assignment.
