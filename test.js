var img = document.querySelector('#image-1234');
var count = 0;
img.onload = function loaded() {
    console.log("img loaded");
    count++;
    console.log(count);
    if(count == 1){
        console.log("failed");
        document.querySelector('#test').style.color ="red";
        img.src = "https://www.w3schools.com/w3css/img_fjords.jpg";
    }
    else if(count > 1){
        console.log("success");
        document.querySelector('#test').style.color ="green";        
    }


};
  
img.src = "https://www.w3schools.com/w3css/img_fjords.jpg";