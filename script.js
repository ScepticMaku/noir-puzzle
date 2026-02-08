const defaultPositions = document.getElementById('part-two').getHTML();
const errorMessage = document.getElementById('error-message');
const partOneTitle = document.getElementById('part-one-title');
errorMessage.classList.add("hidden");
partOneTitle.classList.add("hidden");

var input = document.getElementById("password-field");
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("password-button").click();
    }
});

function toggleElement() {
    const textField = document.getElementById("text-field");

    if (textField.style.display === "none") {
        textField.style.display = "block";
    } else {
        textField.style.display = "none";
    }
}

function hideElement() {

    setTimeout(function () {
        document.getElementById('error-message').classList.add("hidden");
    }, 3000)
}

function checkInput() {
    var input = document.getElementById("password-field");
    const partOne = document.getElementById("part-one");
    const partTwo = document.getElementById("part-two");
    if (input.value.toLowerCase() === "error") {
        partOne.classList.add("hidden");
        partTwo.classList.remove("hidden");
    }
    partOneTitle.classList.remove("hidden");
}

function dragStartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function handleSubmit() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");

    let total = 0;

    try {
        if (box1.childNodes[1].id == "e") {
            total += 1;
        }

        if (box2.childNodes[1].id == "i") {
            total += 1;
        }

        if (box3.childNodes[1].id == "w") {
            total += 1;
        }

        if (box4.childNodes[1].id == "c") {
            total += 1;
        }

        if (total != 4) {
            hideElement();
            errorMessage.classList.remove("hidden");
            document.getElementById('part-two').setHTMLUnsafe(defaultPositions);
            return;
        }
    } catch (error) {
        errorMessage.classList.remove("hidden");
        hideElement();
        document.getElementById('part-two').setHTMLUnsafe(defaultPositions);
        return;
    }

    document.getElementById('part-two').classList.add('hidden');
    document.getElementById('part-three').classList.remove('hidden');
}

function goBack() {
    document.getElementById('part-two').classList.add('hidden');
    document.getElementById('part-one').classList.remove('hidden');
}