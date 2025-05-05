var rollBtn = document.querySelector("#rollbutton");
var img = document.querySelector("#img1");
var x = 0;
rollBtn.onclick = rollbutton;
var number = [];
var rotation = 0;

// CSS Transition for smooth rotation
img.style.transition = "transform 2s linear"; // Add a transition


function rollbutton() {

    var num = Math.floor(Math.random() * 6) + 1;
    number.push(num);
    console.log(num);
    x++; // Increment roll count here

    rotation += 360; // Rotate by 360 degrees each click

    // Apply Rotation (IMPORTANT - do this correctly)
    img.style.transform = `rotateY(${rotation}deg)`; // Set inline style.

    img.src = `images/${num}.png`; //Using template literals

    // Create and append the "Dice:" text
    var textContainer = document.createElement("div");
    var text = document.createElement("h4");
    textContainer.append(text);
    text.textContent = `Dice: ${number.join(', ')}`; // Using template literals
    textContainer.style.textAlign = "center"; // Moved styling here.
    document.body.appendChild(textContainer);

    // Create and append the roll result
    var result = document.createElement("div");
    var img2 = document.createElement("img");
    var roll1 = document.createElement("h3");

    result.appendChild(img2);
    result.appendChild(roll1);

    // Styling the result container
    result.style.width = "25%";
    result.style.textAlign = "center";
    result.style.marginLeft = "37%";
    result.style.marginTop = "3%";
    result.style.border = "2px solid rgb(187, 181, 181)";
    result.style.display = "flex"; // Enable flex
    result.style.flexDirection = "row-reverse"; // Reverse the order
    result.style.padding = "10px";
    result.style.fontSize = "1.2rem";
    result.style.boxShadow = "3px 3px 10px";
    result.style.borderRadius = "10px";
    result.style.backgroundColor="rgb(206, 203, 203)";
    // Styling the roll image
    img2.style.height = "40px";
    img2.style.marginLeft = "60%";
    img2.style.alignSelf = "center";
    img2.style.justifyContent = "right";

    roll1.textContent = `Roll: ${x}`; // Using template literals, moved here and no isRight loop
    img2.src = `images/${num}.png`;
    img2.style.alignSelf = "right";
    document.body.appendChild(result);
    console.log("Rolls:" + x);
}
