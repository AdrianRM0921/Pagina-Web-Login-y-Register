import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
        import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
        import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCHxmT4C4oP6Hunh-h71cS6xWA_K4U88t0",
            authDomain: "login-web-2c2e7.firebaseapp.com",
            projectId: "login-web-2c2e7",
            storageBucket: "login-web-2c2e7.appspot.com",
            messagingSenderId: "330945958414",
            appId: "1:330945958414:web:cb1d718d15bfc7792fe25f",
            measurementId: "G-T9PL9RNBMM"
        };

     
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        const botonC = document.querySelector('#btn_cerrar');

        async function loadUsers() {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));
                const users = querySnapshot.docs.map(doc => doc.data());
                displayUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        }

        function displayUsers(users) {
            const userTableBody = document.getElementById('userTableBody');
            userTableBody.innerHTML = ''; 
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.nombre}</td>
                    <td>${user.usuario}</td>
                    <td>${user.correo}</td>
                `;
                userTableBody.appendChild(row);
            });
        }

        async function handleLogout() {
            try {
                await signOut(auth);
                window.location.href = 'index.html'; 
            } catch (error) {
                console.error('Error logging out:', error.message);
            }
        }

       
        botonC.addEventListener('click', handleLogout);

        
        window.onload = loadUsers;