
        let userInput = document.getElementById("date");
         let birthDate ;

        // We add a today's date or past date
        userInput.max = new Date().toISOString().split("T")[0];
        let result = document.getElementById("result");
        
        
       //Calculating age
       function calculateAge(){
          birthDate = new Date(userInput.value);
         result.innerHTML = "";
          let d1 = birthDate.getDate();
          let m1 = birthDate.getMonth() + 1;
          let y1 = birthDate.getFullYear();

          let today = new Date();

          let d2 = today.getDate();
          let m2 = today.getMonth()+ 1;
          let y2 = today.getFullYear();

        //   Save the difference in the year month and date
        let d3, m3, y3;
        y3= y2 - y1;   //  Year Gap =Curent year - birth year

        if(m2 >= m1){
            m3 = m2 - m1;
        }
        else {
            y3--;
            m3 = 12 + m2 -m1;
        }

        if(d2 >= d1){
            d3 = d2 -  d1;
        }
        else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }
        if(m3 < 0){
            m3 = 11;
            y3--; 
        }
        let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let dayName = days[birthDate.getDay()];
        result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old. Day is <span>${dayName}</span>`;

        countDown();
       }
        function getDaysInMonth (year, month){
            return new Date(year, month, 0).getDate();
        }    

        //  Countdown to next birthday

         function countDown(){
           let today = new Date();
          let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

        if (today > nextBirthday) {
          nextBirthday.setFullYear(today.getFullYear() + 1);
        }
         let diff = nextBirthday - today;               //Miliseconds difference
        let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));     //convert millisecond to days
        result.innerHTML += `<br>Your Birthday is coming in <span>${daysLeft}</span> days.`; 
        }
        