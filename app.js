var q1 = prompt("What is your budget? (low/medium/high)")
var q2 = prompt('Which Operating system do you prefer? (android/ios)')
var q3 = prompt('Which camera do you need? (basic/moderate/high)')
var q4 = prompt('How important is battery life to you? (short/average/long)')
var q5 = prompt("What screen size do you prefer? (small/medium/long)")

if(q1 == "high" && q2 == "ios" && q3 == "moderate"){
    document.write('<p id="text"> iPhone 13 Pro Max <br>')
    document.write('<p id="text"> Price $1099 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "high" && q2 == "ios" && q3 == "high"){
    document.write('<p id="text"> iPhone 15 Pro Max <br>')
    document.write('<p id="text"> Price $1299 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "high" && q2 == "ios" && q3 == "basic"){
    document.write('<p id="text"> iPhone 12 Pro <br>')
    document.write('<p id="text"> Price $999 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "ios" && q3 == "high"){
    document.write('<p id="text"> iPhone x <br>')
    document.write('<p id="text"> Price $500 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "ios" && q3 == "moderate"){
    document.write('<p id="text"> iPhone 7 Plus <br>')
    document.write('<p id="text"> Price $150 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "ios" && q3 == "basic"){
    document.write('<p id="text"> iPhone 7 <br>')
    document.write('<p id="text"> Price $150 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "ios"){
    document.write('<p id="text"> iPhone 6s <br>')
    document.write('<p id="text"> Price $130 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "low" && q2 == "ios"){
    document.write('<p id="text"> iPhone 5s <br>')
    document.write('<p id="text"> Price $40 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "low" && q2 == "android"){
    document.write('<p id="text"> Oppo A1k <br>')
    document.write('<p id="text"> Price $60 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "android" && q3 == "moderate"){
    document.write('<p id="text"> Tecno Spark 5 Air <br>')
    document.write('<p id="text"> Price $70 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "android" && q3 == "high"){
    document.write('<p id="text"> Tecno Spark 6 Go <br>')
    document.write('<p id="text"> Price $80 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "medium" && q2 == "android"){
    document.write('<p id="text"> Tecno Spark 6 Go <br>')
    document.write('<p id="text"> Price $90 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "high" && q2 == "android" && q3 == "high"){
    document.write('<p id="text"> Samsung Galaxy S23 Ultra <br>')
    document.write('<p id="text"> Price $1299 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else if(q1 == "high" && q2 == "android" && q3 == "moderate"){
    document.write('<p id="text"> Samsung Galaxy S22 <br>')
    document.write('<p id="text"> Price $700 <br>')
    document.write('<p id="text"> Operating system: ', q2, '<br>')
    document.write('<p id="text"> Camera: ', q3, '<br>')
    document.write('<p id="text"> Battery Life: ', q4 , '<br>')
    document.write('<p id="text"> Screen Size: ', q5 , '<br>')
}
else{
    document.write('<p id="error">You did something wrong, Try again! <br>')
}

document.write('<a id="copyright" href="https://afaq.dev/">Made by Afaq</a>')