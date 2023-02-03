getData();

async function getData()
{
    const response = await fetch('http://localhost:8080/api/teachers')
    if (response.ok){
        console.log(response);

        const teachers = await response.json();
        const teachersList = Array.from(teachers);

        console.log(teachers);

        teachers.forEach(e => {
            console.log("testy")

            let teacherElement = document.createElement("div")
            teacherElement.className = "col-4 mt-2 teacher-element"
            teacherElement.id = ("id-" + e.id)

            let teacherCard = document.createElement("div")
            teacherCard.className = "card w-100"

            let teacherBody = document.createElement("div")
            teacherBody.className = "card-body"

            let teacherTitle = document.createElement("h5")
            teacherTitle.textContent = e.name;
            teacherTitle.className = "card-title"

            let teacherText = document.createElement("p")
            teacherText.textContent = e.email;
            teacherText.className = "card-text"

            let teacherId = document.createElement("p")
            teacherId.textContent = e.id;
            teacherId.style.visibility = "hidden";

            let teacherDeleteBtn = document.createElement("button")
            teacherDeleteBtn.textContent = "Delete"
            teacherDeleteBtn.className = "btn btn-warning"

            document.getElementById("row-content").appendChild(teacherElement)

            teacherDeleteBtn.onclick = function() {deleteteacher(teacherId.innerHTML)}

            teacherElement.appendChild(teacherCard);
            teacherCard.appendChild(teacherTitle);
            teacherCard.appendChild(teacherText);
            teacherCard.appendChild(teacherDeleteBtn);

            teacherCard.style.border = "2px solid grey"

            document.getElementById("row-content").appendChild(teacherElement);
        });
    } else {
        console.log("something went wrong: ", response);
    }

}

async function deleteteacher(id)
      {
        console.log("testy" + id)
        let response = await fetch('http://localhost:8080/api/teachers' + '/' + id, {method: 'DELETE'})
        let responseData = await response.json();

        if (responseData == true)
        {
          alert("teacher with id:" + id + " has been deleted");
          document.getElementById("id-" + id).remove();
        }
      }


function testyTest()
{
    console.log("button is being clicked")
}