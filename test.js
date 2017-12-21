var img = document.querySelector('#image-1234');
var count = 0;
img.onload = function loaded() {
    console.log("img loaded");
    count++;
    console.log(count);
    if(count == 1){
        console.log("failed?");
        img.src = "https://www.w3schools.com/w3css/img_fjords.jpg";
    }
    else if(count > 1){
        console.log("success");        
    }


};
  
img.src = "https://www.w3schools.com/w3css/img_fjords.jpg";