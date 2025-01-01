// async function getPost()
// {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log("Data fetched successfully");
//     document.querySelector('.posts').innerHTML = data.body;

// }

async function getPost()
 {
    const response = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
    console.log("Data fetched successfully");
    document.querySelector('.posts').innerHTML = response.data.body;
 }

getPost();