

const loadData = ()=>{
    const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())

      .then((data) => console.log(data))
}
// const loadPost = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts'

//     fetch(url)
//     .then(res => res.json())
//     .then((json) =>  {
//         console.log(json);
//         displayPost(json);
//     })
// }

// const displayPost = (posts) => {
//     posts.forEach(post => {
//         console.log(post);
//     });
// }

// console.log(result,typeof result)
// const person = {
//     name:'Fahim',
//     isStudent: true,
//     salary:25000
// }

// const personJSON = JSON.stringify(person)
// console.log(personJSON)
// console.log(personJSON, typeof personJSON )

// const parse = JSON.parse(personJSON)
// console.log(parse)
// console.log(parse ,typeof parse)