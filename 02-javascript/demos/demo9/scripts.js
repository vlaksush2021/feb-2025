// Array of objects

let courses = [
    { title: 'Frontend', instructor: 'ramesh', duration: '4 weeks' },
    { title: 'Backend', instructor: 'mahesh', duration: '6 weeks' },
    { title: 'integration', instructor: 'somesh', duration: '2 weeks' }
]

// console.log(courses)

function displayCourses() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";
    courses.forEach((course) => {
        let li = document.createElement('li')
        li.textContent = `${course.title} - ${course.instructor} - ${course.duration}`
        courseList.appendChild(li)

    })
}

function display2(){
    console.log("testing fun")
}

function addCourse() {
    const title = document.getElementById("courseName").value;
    const instructor = document.getElementById("courseInstructor").value;
    const duration = document.getElementById("courseDuration").value;

    if (title && instructor && duration) {
        courses.push({ title, instructor, duration })
        displayCourses();
    }
    else {
        alert("please enter all the fields")
    }
}


function removeCourse() {

    let flag = confirm("Do you want to delete ?")
    if (flag) {
        courses.pop();
        displayCourses();
    }
}

displayCourses();