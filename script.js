let isFirstUser = true;
let previousName = "";
let previousGender = "";
let previousAge = "";

function showAgeCalculator() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;

    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!gender) {
        alert("Please enter your name.");
        return;
    }

    const popup = document.getElementById("popup");
    popup.innerHTML = `<p>Please enter your birthday to calculate your age.</p>`;
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";


        document.getElementById("inputSection").style.display = "none";
        document.getElementById("ageCalculatorSection").style.display = "block";

        if (isFirstUser && previousAge) {
            const resultDisplay = document.getElementById("resultDisplay");
            resultDisplay.innerHTML = `
                <p>Previous User Age:</p>
                <p>${previousName}</p>
                <p>${previousGender}</p>
                <p>${previousAge}</p>
            `;
        }
    }, 2000);
}


function calculateAge() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    const birthDate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (!birthDate || birthDate > today) {
        alert("Please enter a valid birthdate.");
        return;
    }

    const ageInMillis = today - birthDate;
    const ageDate = new Date(ageInMillis);

    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;

  
    previousName = name;
    previousGender = gender;
    previousAge = `${ageYears} years, ${ageMonths} months, ${ageDays} days`;

    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = `
      <p>Name: ${name}</p>
      <p>Gender: ${gender}</p>
      <p>Your Age:</p>
      <p>${ageYears} years, ${ageMonths} months, ${ageDays} days</p>
      <button class="done-button" onclick="resetPage()">Done</button>
    `;


    isFirstUser = false;
}


function resetPage() {

    document.getElementById("name").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("birthdate").value = "";

    document.getElementById("ageCalculatorSection").style.display = "none";
    document.getElementById("inputSection").style.display = "block";

    const popup = document.getElementById("popup");
    popup.innerHTML = `<p>Form reset! Ready for another user.</p>`;
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000); 

    const resultDisplay = document.getElementById("resultDisplay");
    if (previousAge) {
        resultDisplay.innerHTML = `
            <p>Previous User Age:</p>
            <p>${previousName}</p>
            <p>${previousGender}</p>
            <p>${previousAge}</p>
        `;
    } else {
        resultDisplay.innerHTML = `<p>Previous User Age</p>`;
    }

    isFirstUser = true;
}
