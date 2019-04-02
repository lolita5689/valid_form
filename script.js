
   function myFunction() {

       // Берём нужные элементы
       let passLabel = document.getElementById("parol");
           userLabel = document.getElementById("login");
       console.log(passLabel.value);
       console.log(userLabel.value);

       // Проверяем кол-во символов для логина 
       if(userLabel.value.length >= 2) {
           // Автоматом заменяет большие буквы на маленькие
           userLabel.value = userLabel.value.toLowerCase();
       } else {
           userLabel.className = userLabel.className + " err";
           return alert("Логин от 6 до 16 символов!");
       }


       // Проверяем пароль на кол-во букв, иначе алерт
       if(passLabel.value.length >= 6 && passLabel.value.length <= 16) {

           // Исключаем цифры из пароля.
           if(!/[0-9]/.test(passLabel.value)) {
               return alert("Валидация прошла успешно!");
           }
           passLabel.className = passLabel.className + " err";
           return alert("В пароле не должны присутствовать цифры!");

       }
       passLabel.className = passLabel.className + " err";
       return alert("Пароль от 6 до 16 символов!");
   }
  