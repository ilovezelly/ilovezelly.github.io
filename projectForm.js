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

    // Get username and password from the form
    let enteredUsername = usrname.value;
    let enteredPassword = psw.value;

    // Find student with matching username
    let foundStudent = data.find(student => student.usrname === enteredUsername);

    // If a student with the entered username is found
    if (foundStudent) {
        // Check if the entered password matches the stored password
        if (foundStudent.psw === enteredPassword) {
            // Redirect to studentAccess.html
            window.location.href = "studentAccess.html";
        } else {
            // Password doesn't match
            alert("Incorrect password. Please try again.");
        }
    } else {
        // Username not found
        alert("Username not found. Please register an account.");
    }

    console.log(studentData);
    data.push(studentData); // Convert array of key-value pairs to object
    localStorage.setItem("studentLogin", JSON.stringify(data));

        //   // Redirect to studentAccess.html
        // window.location.href = "studentAccess.html";
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