function solution(number){
    if (number >= 0){
        let sumMultiples = 0
            for (let i = 0; i < number; i++){
                if (i % 5 == 0){
                    sumMultiples += i
                }
                else{
                    if (i % 3 == 0){
                        sumMultiples += i
                    }
                }
            }
        return sumMultiples 
    }
    else{
        return 0
    }
}

document.getElementById("sendNumber").addEventListener("click", () =>{
    let number = document.getElementById("numberInput").value
    sumMultiples = solution(number)
    document.getElementById("result").innerHTML = "The sum of multiples of 3 and 5 up to " + number + " is " + sumMultiples
    document.getElementById("numberInput").value = ""
})