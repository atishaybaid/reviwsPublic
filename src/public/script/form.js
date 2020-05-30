let question;
import Questions from "../../index.js"


document.querySelector('.starReview').addEventListener('click',(e)=>{
    var id=e.target.id;
    id=id.split('-');
    id=id[0];
    RemoveOldStars();
    ShowShars(id);
});

function ShowShars(id){
    for(var i=1;i<=id;i++){
        document.getElementById(i+'-star').classList.add("checked");
    }
}

function RemoveOldStars(){
    for(var i=1;i<=5;i++){
        document.getElementById(i+'-star').classList.remove("checked");
    }
}

document.querySelector('.submit-btn').addEventListener('click',sumbitResponses);

function sumbitResponses(){
    // questions = document.querySelector('.container').childNodes;
    console.log('Questions'); 
}