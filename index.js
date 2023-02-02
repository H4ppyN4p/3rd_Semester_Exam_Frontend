getData();

async function getData()
{
    const response = await fetch('http://localhost:8080/api/courses')
    if (response.ok){
        console.log(response);

        const teachers = await response.json();
        const teachersList = Array.from(teachers);

        console.log(teachersList);

        teachers.forEach(element => {
            let teacherElement = document.createElement("div")
            teacherElement.className = "col-4 mt-2"
            teacherElement.style = "border 2px solid black"
            teacherElement.id = ("id-" + element.id)

            document.getElementById("row-content").appendChild(teacherElement)
        });
    } else {
        console.log("something went wrong: ", response);
    }


}