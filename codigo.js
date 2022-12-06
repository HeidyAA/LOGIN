document.getElementById("Ingresar").addEventListener("click", function(){
  //Obteniendo los valores
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  console.log("La cuenta se creó exitosamente")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  console.log("Presenta fallas en la autenticación")
});

})