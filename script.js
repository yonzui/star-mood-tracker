
function changeImage(fileName) {
    let img = document.querySelector("#starImage");
    img.setAttribute("src", fileName);
}

let pinkstar=(message)=> {

    let msg=document.querySelector("#theMood")
    msg.innerText=message;

    }

    let first=document.querySelector("#one1")
    first.addEventListener('click',function() {
        pinkstar('worried!')
    });

let orangestar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let second=document.querySelector("#one2")
        second.addEventListener('click',function() {
            orangestar('excited!')
        });

let yellowstar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let third=document.querySelector("#one3")
        third.addEventListener('click',function() {
            yellowstar('happy!')
        });

let greenstar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let fourth=document.querySelector("#one4")
        fourth.addEventListener('click',function() {
            greenstar('quirky!')
        });
        
let bluestar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let fifth=document.querySelector("#one5")
        fifth.addEventListener('click',function() {
            bluestar('sleepy!')
        });

let purplestar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let sixth=document.querySelector("#one6")
        sixth.addEventListener('click',function() {
            purplestar('chill!')
        });

let whitestar=(message)=> {

        let msg=document.querySelector("#theMood")
        msg.innerText=message;

        }

        let seventh=document.querySelector("#one7")
        seventh.addEventListener('click',function() {
            whitestar('peaceful!')
        });

