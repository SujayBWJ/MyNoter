const del = document.getElementById("delBtn")
const save = document.getElementById('saveBtn')
const noter = document.getElementById('noter')
const show = document.getElementById('show')
const list = document.getElementById("list");
const titleInput = document.getElementById("title");


save.addEventListener('click', () =>{
    const notes = JSON.parse(localStorage.getItem("notes")) || [] // localstorage stores only strings not arrays, so convert that string into array and store it under the variable notes
const note = {
    title: titleInput.value, // title is a key which stores the title of the note
    body: noter.value
};

    notes.push(note) // now push the title into the notes array
    localStorage.setItem("notes", JSON.stringify(notes)) // now store the modified notes array inside localstorage by converting it back to string

});

show.addEventListener("click", ()=>{
    const notes = JSON.parse(localStorage.getItem("notes")) || []
    list.innerHTML = "";
    notes.forEach(n => {  // n stores text of the note the forEach is iterating over

        const item = document.createElement("div")
        item.textContent = n.title; // store the title of the note inside item

        item.addEventListener("click", () =>{
            titleInput.value = n.title;
            noter.value = n.body;
        })
        list.appendChild(item) // put the content of item into the list

    });
    
});


del.addEventListener("click", ()=>{
    localStorage.removeItem("notes");
    list.innerHTML = ""
    noter.value = "";
});