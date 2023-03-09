function checkForName() {
    const name = document.getElementById('name').value;
    if (nameIsValid(name)) {
        console.log("::: Running checkForName :::", name);
        document.getElementById('welcome').style.color = "grey";
        document.getElementById('welcome').innerHTML = `Welcome ${name}! hang on while we process your request...`
    } else {
        document.getElementById('welcome').innerHTML = `Processing your request, please wait...`
    }
    
}

 
const nameIsValid = (name)=> {
    if (name == undefined || name == '') {
        return false
    }
    return true
}

export { checkForName, nameIsValid }
