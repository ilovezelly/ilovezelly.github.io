// Get the current date
let currentDate = new Date();

// Calculate the current year and month
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1

// Set the minimum value for the month picker
let monthPicker = document.getElementById("monthPicker");
monthPicker.setAttribute("min", `${currentYear}-${currentMonth.toString().padStart(2, '0')}`);

// logIn event
let sLogin = document.getElementById("studentLogin");

// this is for getting the data//
let recordData = localStorage.getItem("studentLogin");
let data = (recordData) ? JSON.parse(recordData) : [];

// console.log(studentLogIn);
// this is for storing the data in the local Storage//
function logIn(event) {
    event.preventDefault();
    let studentData = {id:Date.now(),
                       usrname: usrname.value,
                       psw: psw.value
                    };

    console.log(studentData);
    data.push(studentData); // Convert array of key-value pairs to object
    localStorage.setItem("studentLogin", JSON.stringify(data));

          // Redirect to studentAccess.html
        window.location.href = "studentAccess.html";
}
sLogin.addEventListener("submit", logIn);



let studentForm = document.getElementById("studentRegistry");

// this is for getting the data//
let recordStorage = localStorage.getItem("studentRegistry");
let studentRecords = (recordStorage) ? JSON.parse(recordStorage):[];

// this is for storing the data in the local Storage//
function getValue(event)
{
    event.preventDefault();
    const formData = new FormData(studentForm);
        const fValues =[...formData.entries()];

        for (const key of formData.keys()) {}

        // console.log(fValues);
        studentRecords.push(fValues);
        localStorage.setItem("studentRegistry", JSON.stringify(studentRecords));
}

studentForm.addEventListener("submit", getValue);