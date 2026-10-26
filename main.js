
function openContainer() {
    const Container = document.getElementById("clickContainer");
    const title = document.getElementById("block-title");
    Container.classList.toggle("show");
    title.classList.toggle("hidden");

}


//typing
let txt = 'Chúc chị hai sinh nhật vui vẻ, tuổi mới sự nghiệp '
    + 'thuận lợi, ăn uống đầy đủ, ngủ đủ giấc và được đi du lịch nhiều nơi hơn nhá. '
    + 'Cũng chúc hai luôn mạnh mẽ với cuộc sống và tìm được người phù hợp với mình nha, nếu không cũng không sao 28 cũng chưa phải là tết :))) \n Happy Bithday, good luck !'
let word = 0;
let speed = 50;


function openBlockTitle() {
    const ctEmail = document.getElementById("contentEmail");
    const blTitle = document.getElementById("block-title");
    const btnMail = document.getElementById("btn_mail");
    const music = document.getElementById("bgMusic")

    music.play().catch(err => console.log("Không phát được nhạc:", err));

    btnMail.classList.add("ripple");
    ctEmail.classList.add("opening");
    setTimeout(() => {
        ctEmail.classList.remove("opening");
        ctEmail.classList.add("hidden");

        blTitle.classList.add("show");
        blTitle.classList.remove("hidden");

        word = 0;
        document.getElementById("txtTyping").innerHTML = "";
        document.querySelector(".boxTyping").classList.remove("done");

        typingWrite();
    }, 1000);


}

function typingWrite() {
    if (word < txt.length) {
        let char = txt.charAt(word);
        if (char === '\n') {
            document.getElementById("txtTyping").innerHTML += '<br>';
        } else {
            document.getElementById("txtTyping").innerHTML += char;
        }
        word++;
        setTimeout(typingWrite, speed);
    } else {
        document.querySelector(".boxTyping").classList.add("done");
    }
}

