import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHxmT4C4oP6Hunh-h71cS6xWA_K4U88t0",
  authDomain: "login-web-2c2e7.firebaseapp.com",
  projectId: "login-web-2c2e7",
  storageBucket: "login-web-2c2e7.appspot.com",
  messagingSenderId: "330945958414",
  appId: "1:330945958414:web:cb1d718d15bfc7792fe25f",
  measurementId: "G-T9PL9RNBMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let registroNombre = document.querySelector('#nombre_completoR');
let registroCorreo = document.querySelector('#correoR');
let registroUsuario = document.querySelector('#usuarioR');
let registroPassword = document.querySelector('#passwordR');

let loginCorreo = document.querySelector('#correo');
let loginPassword = document.querySelector('#password');

let botonE = document.querySelector('#btn_entrar');
let botonR = document.querySelector('#btn_regis');


botonR.addEventListener('click', async (event) => {
    event.preventDefault(); 

    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            registroCorreo.value,
            registroPassword.value
        );
    
        console.log('User registered:', userCredential.user);

        await addDoc(collection(db, 'users'), {
            uid: userCredential.user.uid,
            nombre: registroNombre.value,
            usuario: registroUsuario.value,
            correo: registroCorreo.value
        });

        alert('Registro exitoso!');
    } catch (error) {
        console.error('Error registering user:', error.message);
        alert('Error al registrar usuario: Usuario ya existe ');
    }
});


botonE.addEventListener('click', async (event) => {
    event.preventDefault(); 

    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            loginCorreo.value,
            loginPassword.value
        );
     
        console.log('User logged in:', userCredential.user);
        alert('Inicio de sesión exitoso!');

       
        window.location.href = 'panel.html'; 
    } catch (error) {
        console.error('Error logging in user:', error.message);
        alert('Error al iniciar sesión: El Correo o la Contraseña pueden estar mal' );
    }
});