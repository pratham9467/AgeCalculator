let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("yourAge");

function calculate() {
    if (userInput.value === "") {
        result.innerHTML = "Please enter a valid date.";
    } else {
        // user selected date
        let birthDate = new Date(userInput.value);

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1; //plus 1 because month start from 0 so 1 is added.
        let y1 = birthDate.getFullYear();

        //today's date.
        let todayDAte = new Date();

        let d2 = todayDAte.getDate();
        let m2 = todayDAte.getMonth() + 1;
        let y2 = todayDAte.getFullYear();

        let y3, m3, d3;
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        result.innerHTML = `Your age is <span>${y3}</span> ${years()}, <span>${m3}</span> ${months()} and <span>${d3}</span> ${days()} older.`;

        function years() {
            if (y3 > 1) {
                return "years";
            } else {
                return "year";
            }
        }

        function months() {
            if (m3 > 1) {
                return "months";
            } else {
                return "month";
            }
        }

        function days() {
            if (d3 > 1) {
                return "days";
            } else {
                return "day";
            }
        }
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
