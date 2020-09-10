const todoArr = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((items) => {
    document.getElementById("myList").innerHTML = items
      .map((item) => `<li>${item.title}</li>`)
      .join("")
    return items
  })
console.log(todoArr)

document.getElementById("myList").addEventListener("click", function (e) {
  const erase = e.target
  // erase will CAPITALIZE the clicked <li> allowing me to erase this single child.
  if (erase.tagName.toUpperCase() == "LI") {
    erase.parentNode.removeChild(erase)
  }
})
