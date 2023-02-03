getData();

async function getData()
{
    const response = await fetch('http://localhost:8080/api/courses')
    if (response.ok){
        console.log(response);

        const courses = await response.json();
        const coursesList = Array.from(courses);

        console.log(courses);

        courses.forEach(e => {
            console.log("testy")

            let courseElement = document.createElement("div")
            courseElement.className = "col-12 mt-2 course-element"
            courseElement.id = ("id-" + e.id)

            let courseCard = document.createElement("div")
            courseCard.className = "card w-100"

            let courseBody = document.createElement("div")
            courseBody.className = "card-body"

            let courseTitle = document.createElement("h5")
            courseTitle.textContent = e.name;
            courseTitle.className = "card-title"

            let courseText = document.createElement("p")
            courseText.textContent = e.email;
            courseText.className = "card-text"

            let courseId = document.createElement("p")
            courseId.textContent = e.id;
            courseId.style.visibility = "hidden";

            let courseAssignBtn = document.createElement("button")
            courseAssignBtn.textContent = "Assign course to course"
            courseAssignBtn.className = "btn btn-warning"

            document.getElementById("row-content").appendChild(courseElement)

            courseAssignBtn.onclick = function() {assigncourse(courseId.innerHTML)}

            courseElement.appendChild(courseCard);
            courseCard.appendChild(courseTitle);
            courseCard.appendChild(courseText);
            courseCard.appendChild(courseAssignBtn);

            courseCard.style.border = "2px solid grey"

            document.getElementById("row-content").appendChild(courseElement);
        });
    } else {
        console.log("something went wrong: ", response);
    }

}



function testyTest()
{
    console.log("button is being clicked")
}