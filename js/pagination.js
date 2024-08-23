/*export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
  
    if (response.ok) {
      return data;
    }
  
    throw new Error(data.message);
  };

  export function renderPost(post, parent) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;
    const postBody = document.createElement('p');
    postBody.textContent = post.body;
    postElement.append(postTitle, postBody)
    parent.append(postElement);
  }
  
  export function renderPosts(posts) {
    const article = document.querySelector('article');
    posts.forEach(post => renderPost(post, article));
  };

  function paginate(items, itemsPerPage) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pages = [];
  
    for (let i = 0; i < totalPages; i++) {
      const start = i * itemsPerPage;
      const end = start + itemsPerPage;
      pages.push(items.slice(start, end));
    }
  
    return pages;
  }


  function renderPagination(paginatedPosts) {
    const pagination = document.querySelector('.pagination');
    const article = document.querySelector('article');
    pagination.innerHTML = '';
  
    paginatedPosts.forEach((page, index) => {
      const button = document.createElement('button');
      button.textContent = index + 1;
      button.addEventListener('click', () => {
        article.innerHTML = '';
        renderPosts(page);
      });
      pagination.append(button);
    });
  }

  import { paginate, renderPagination } from './pagination.js';
import { getPosts, renderPosts } from './posts.js';

export async function setupPostsPage() {
  const posts = await getPosts();
  const paginatedPosts = paginate(posts, 10);
  renderPosts(paginatedPosts[0]);
  renderPagination(paginatedPosts);
}

export function renderNextButton(paginatedPosts, currentPage) {
    const pagination = document.querySelector('.pagination');
    const button = document.createElement('button');
    button.textContent = 'Next';
    button.addEventListener('click', () => {
      article.innerHTML = '';
      renderPosts(paginatedPosts[currentPage + 1]);
    });
    pagination.append(button);
  }
  
  export function renderPreviousButton(paginatedPosts, currentPage) {
    const pagination = document.querySelector('.pagination');
    const button = document.createElement('button');
    button.textContent = 'Previous';
    button.addEventListener('click', () => {
      article.innerHTML = '';
      renderPosts(paginatedPosts[currentPage - 1]);
    });
    pagination.append(button);
  }
  
  export function renderFirstButton(paginatedPosts) {
    const pagination = document.querySelector('.pagination');
    const button = document.createElement('button');
    button.textContent = 'First';
    button.addEventListener('click', () => {
      article.innerHTML = '';
      renderPosts(paginatedPosts[0]);
    });
    pagination.append(button);
  }
  
  export function renderLastButton(paginatedPosts) {
    const pagination = document.querySelector('.pagination');
    const button = document.createElement('button');
    button.textContent = 'Last';
    button.addEventListener('click', () => {
      article.innerHTML = '';
      renderPosts(paginatedPosts[paginatedPosts.length - 1]);
    });
    pagination.append(button);
  }
  
  export function renderPagination(paginatedPosts, currentPage) {
    const pagination = document.querySelector('.pagination');
    const article = document.querySelector('article');
    pagination.innerHTML = '';
  
    if (currentPage > 0) {
      // Only show the previous and first buttons if we are not on the first page
      renderFirstButton(paginatedPosts);
      renderPreviousButton(paginatedPosts, currentPage);
    }
  
    paginatedPosts.forEach((page, index) => {
      const button = document.createElement('button');
      button.textContent = index + 1;
      button.addEventListener('click', () => {
        article.innerHTML = '';
        renderPosts(page);
      });
      pagination.append(button);
    });
  
    if (currentPage < paginatedPosts.length - 1) {
      // Only show the next and last buttons if we are not on the last page
      renderNextButton(paginatedPosts, currentPage);
      renderLastButton(paginatedPosts);
    }
  }
  
  function showLoader() {
    const loader = document.querySelector('.loader');
    loader.hidden = false;
  }
  
  function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.hidden = true;
  }
  
  export default { show: showLoader, hide: hideLoader };*/


const deleteButton = document.querySelector('.delete');

  deleteButton.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      // Delete the post
    }
});




