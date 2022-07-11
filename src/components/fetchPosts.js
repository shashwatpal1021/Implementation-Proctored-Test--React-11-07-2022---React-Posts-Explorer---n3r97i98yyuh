const fetchPosts = async (page, limit) => {
    let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    return fetch(url);
    // optionally write fetching logic here or somewhere else
}

export { fetchPosts }