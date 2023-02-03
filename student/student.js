getData();

async function getData()
{
    const response = await fetch('http://localhost:8080/api/students')
    if (response.ok){
        console.log(response);

        const students = await response.json();
        const studentsList = Array.from(students);

        console.log(students);

        students.forEach(e => {
            console.log("testy")

            let studentElement = document.createElement("div")
            studentElement.className = "col-4 mt-2 student-element"
            studentElement.id = ("id-" + e.id)

            let studentCard = document.createElement("div")
            studentCard.className = "card w-100"

            let studentBody = document.createElement("div")
            studentBody.className = "card-body"

            let studentTitle = document.createElement("h5")
            studentTitle.textContent = e.name;
            studentTitle.className = "card-title"

            let studentText = document.createElement("p")
            studentText.textContent = e.email;
            studentText.className = "card-text"

            let studentId = document.createElement("p")
            studentId.textContent = e.id;
            studentId.style.visibility = "hidden";

            let studentDeleteBtn = document.createElement("button")
            studentDeleteBtn.textContent = "Delete"
            studentDeleteBtn.className = "btn btn-warning"

            document.getElementById("row-content").appendChild(studentElement)

            studentDeleteBtn.onclick = function() {deletestudent(studentId.innerHTML)}

            studentElement.appendChild(studentCard);
            studentCard.appendChild(studentTitle);
            studentCard.appendChild(studentText);
            studentCard.appendChild(studentDeleteBtn);

            studentCard.style.border = "2px solid grey"

            document.getElementById("row-content").appendChild(studentElement);
        });
    } else {
        console.log("something went wrong: ", response);
    }

}

async function deletestudent(id)
      {
        console.log("testy" + id)
        let response = await fetch('http://localhost:8080/api/students' + '/' + id, {method: 'DELETE'})
        let responseData = await response.json();

        if (responseData == true)
        {
          alert("student with id:" + id + " has been deleted");
          document.getElementById("id-" + id).remove();
        }
      }


function testyTest()
{
    console.log("button is being clicked")
}