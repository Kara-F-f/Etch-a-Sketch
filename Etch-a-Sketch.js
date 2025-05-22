
function getColor() {
    let rColor = Math.random();
    let gColor = Math.random();
    let bColor = Math.random();
    r = Math.floor(rColor * 255) + 1;
    g = Math.floor(gColor * 255) + 1;
    b = Math.floor(bColor * 255) + 1;
    return `${r},${g},${b}`;
};


for (let a = 0; a < 16; a++) {
    const lineContainer = document.createElement("div");
    lineContainer.classList.add("lineContainer");
    lineContainer.style.display = "flex";
    lineContainer.style.flexDirection = "column";
    lineContainer.style.flexGrow = 1;
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = "border: solid black";
        square.style.flexGrow = 1;
        lineContainer.appendChild(square); 
    };
    squareContainer.appendChild(lineContainer);
}; 

const squares = document.querySelectorAll(".square");



squares.forEach((square) => {
    for (let i = 0; i < 10; i++) {
        let opc = 0.1;
        square.addEventListener("mouseover", () => {
            color = getColor();
            square.style.cssText = `border: solid black; background: rgb(${getColor()}, ${opc})`;
            square.style.flexGrow = 1;
            opc += 0.1;    
        });
    };
    
});


let gridNum;
const button = document.querySelector("button");
button.addEventListener("click", () => {
    oldLine = document.querySelectorAll(".lineContainer")
    oldLine.forEach((line) => line.remove());
    gridNum = prompt("How many squares per side would you like for the new grid? (e.g., enter 16 for a 16x16 grid) Please enter a number smaller than 100.");  
    const squareContainer = document.querySelector("#squareContainer"); 
 
    for (let a = 0; a <gridNum; a++) {
        const lineContainer = document.createElement("div");
        lineContainer.classList.add("lineContainer");
        lineContainer.style.display = "flex";
        lineContainer.style.flexDirection = "column";
        lineContainer.style.flexGrow = 1;
        for (let i = 0; i < gridNum; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "border: solid black";
            square.style.flexGrow = 1;
            lineContainer.appendChild(square); 
        };
        squareContainer.appendChild(lineContainer);
    }; 

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        for (let i = 0; i < 10; i++) {
            let opc = 0.1;
            square.addEventListener("mouseover", () => {
                color = getColor();
                square.style.cssText = `border: solid black; background: rgb(${getColor()}, ${opc})`;
                square.style.flexGrow = 1;
                opc += 0.1;    
            });
        };
        
    });
});



 




