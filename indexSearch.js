
/*
const input = document.querySelector("input");
const log = document.getElementById("values")

let teacherElements = document.getElementsByClassName("card")
const arr = Array.prototype.slice.call(teacherElements);

console.log(arr)
console.log(arr.length)

input.addEventListener("input", updatedValue);
*/




function searchFunction()
{

    //console.log("inputting stuff")
    const input = document.getElementById("myInput")
    input.addEventListener("input", updatedValue)
    
}

function updatedValue(e)
{

    const htmlElements = document.getElementsByClassName("card-title")
    //console.log(htmlElements);
    const arr = Array.prototype.slice.call(htmlElements)


    arr.forEach(element => {
    
        //console.log(e.target.value)


         if (e.target.value.length == "")
        {
            //console.log("empty input field")
            element.parentElement.style.display = ""
        }
        else if  (e.target.value != element.textContent)
        {
            //console.log("it matches")
            element.parentElement.style.display = "none"
        }
        else 
        {
            //console.log("it doesn't match")
            element.parentElement.style.display = ""
        } 

});
    
}