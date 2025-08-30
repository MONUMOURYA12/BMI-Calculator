const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const button = document.querySelector('button')

button.addEventListener("click", function(){
    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    if(height > 0 && weight > 0){
        const bmi = weight / ((height / 100) * (height / 100))
        document.getElementById("result").innerText = "Your BMI is:- " + bmi.toFixed(1)
    } else {
        document.getElementById("result").innerText = "Please enter valid height and weight!"
    }
})
