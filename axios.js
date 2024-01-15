const form=document.getElementById("form");
const userName=document.getElementById("name");
const userEmail=document.getElementById("email");
const usersList=document.getElementById("users")

function handleFormSubmit(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value
    const user={
        name,
        email
    }

    axios.post("https://crudcrud.com/api/f1694aa5784747ed83b2deea8f170caa/appointmentData",user)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    displayUsers(user)
}

function displayUsers(user){

    const childElement=`<li id=${user._id} >${user.name} : ${user.email}
    <button onclick=deleteUser('${user._id}')>Delete User</button>
    <button onclick=editUserDetails('${user._id}','${user.name}','${user.email}')>Edit Details</button></li>`
    usersList.innerHTML=usersList.innerHTML + childElement

}

