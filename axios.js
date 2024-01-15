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
window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/f1694aa5784747ed83b2deea8f170caa/appointmentData")
        .then((response) => {
            for(var i=0;i<response.data.length;i++){
                displayUsers(response.data[i])
            }    
        })
        .catch(error => console.log(error))
})

function displayUsers(user){

    const childElement=`<li id=${user._id} >${user.name} : ${user.email}
    <button onclick=deleteUser('${user._id}')>Delete User</button>
    <button onclick=editUserDetails('${user._id}','${user.name}','${user.email}')>Edit Details</button></li>`
    usersList.innerHTML=usersList.innerHTML + childElement

}

function deleteUser(userId){

    axios.delete(`https://crudcrud.com/api/f1694aa5784747ed83b2deea8f170caa/appointmentData/${userId}`)
    .then(response => {removeFromScreen(userId);
    console.log(response.data)})
    .catch(error => console.log(error))
    
}

function removeFromScreen(userId){
    const userToBeDeleted= document.getElementById(userId)
    if(userToBeDeleted){
    usersList.removeChild(userToBeDeleted)
}
}