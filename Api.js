
async function hello(){
const data = await fetch("https://webbook-backend-api-s.onrender.com/api/v1/book/all")
const response = await data.json()


response.forEach((book)=>{

  console.log(book.title)
})
}
hello()