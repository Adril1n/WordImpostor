function startGame() {
    var normalWord = document.getElementById("normalWord").value;
    var impostorWord = document.getElementById("impostorWord").value;

    const startBtn = document.getElementById("start");

    if (normalWord == "" || impostorWord == "")
    {
        startBtn.innerHTML = "Cannot be empty!";
        setTimeout(() => {
            startBtn.innerHTML = "Start";
        }, 1500);
        return;
    }

    if (normalWord == impostorWord)
    {
        startBtn.innerHTML = "Use different words!";
        setTimeout(() => {
            startBtn.innerHTML = "Start";
        }, 1500);
        return;
    }

    document.getElementById("selectWordContainer").style.display = 'none';
    document.getElementById("playGameContainer").style.display = 'flex';
}

var canPressAgain = true;

function showWord(elementId) {
    if (!canPressAgain)
    {
        return;
    }
    canPressAgain = false;
    const input = document.getElementById(elementId);
    const wordArea = document.getElementById("wordArea");

    // wordArea.classList.add("show");
    wordArea.style.display = "inline-grid";
    document.getElementById("wordAreaText").innerHTML = input.value;
    setTimeout(() => {
        wordArea.style.display = "none";
        // wordArea.classList.remove("show");
        // void wordArea.offsetWidth;
        
        canPressAgain = true;
    }, 2500)
}