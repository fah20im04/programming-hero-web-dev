const handleAddTostarage =() =>{
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const data ={id,name}
    // console.log(data)
    // localStorage.setItem(email,name)
    localStorage.setItem(id,JSON.stringify(data))
}

const storedItem = localStorage.getItem("663255")
console.log(JSON.parse(storedItem))