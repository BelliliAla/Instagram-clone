const likeEl = document.getElementById("like-el")
const likesNumberEl = document.getElementById("likes-number-el")
let likesCount = Number(likesNumberEl.textContent)

likeEl.addEventListener('click',function(){
    likesCount += 1
    likesNumberEl.innerText = likesCount
})