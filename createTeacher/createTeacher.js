const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    submitTeacher(e)
})


function submitTeacher(event)
{
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
   
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    const value = Object.fromEntries(formData.entries());
    console.log(value)
    console.log(JSON.stringify(value));

    postTeacher(value);
}

async function postTeacher(value)
{
    fetch('http://localhost:8080/api/teachers',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    }    
)
}