
var board = document.getElementsByClassName('gameboard')[0]

//---------------- making the grid-----------------------------
let total_blocks = 150
let i = 1
while (i<=total_blocks) {
    var child = document.createElement('span')
    child.setAttribute('class', `cell`)
    child.setAttribute('id', `cell${i}`)
    child.style.width = '38px'
    child.style.height = '38px'
    child.style.border = '1px solid gray'
    board.appendChild(child)
    // console.log(child)
    i++
}


// -------------------making blocks using oops----------------
class Block{
    constructor (p1,p2,p3,p4,shape,colour){
        this.p1 = p1
        this.p2 = p2
        this.p3 = p3
        this.p4 = p4
        this.shape = shape
        this.colour = colour
        changeColour(this.p1,this.p2,this.p3,this.p4, colour)
    }

    move(){    
        // if(this.p1+10 <= total_blocks || this.p2+10 <= total_blocks || this.p3+10 <= total_blocks || this.p4+10 <= total_blocks){
        changeColour(this.p1,this.p2,this.p3,this.p4,'')
        this.p1 = this.p1+10
        this.p2 = this.p2+10
        this.p3 = this.p3+10
        this.p4 = this.p4+10
        console.log(this.p1,this.p2,this.p3,this.p4)
        changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        // }
    }

    rotate() {
        if(this.shape === 'z'){
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1+10
            this.p2 = this.p2-1
            this.p3 = this.p3+12
            this.p4 = this.p4+1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }else if(this.shape === 'l'){

        }else if(this.shape === 't'){

        }else if(this.shape === 's'){

        }else if(this.shape === 'd'){

        }
    }
}

//  Z
class Z extends Block{
    rotate(){
        changeColour(this.p1,this.p2,this.p3,this.p4,'')
        this.p1 = this.p1+10
        this.p2 = this.p2-1
        this.p3 = this.p3+12
        this.p4 = this.p4+1
        console.log(this.p1,this.p2,this.p3,this.p4)
        changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
    }

    reverse(){
        console.log(this.p2%10)
        if (this.p2%10 === 0) {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-9
            this.p2 = this.p2+2
            this.p3 = this.p3-11
            this.p4 = this.p4
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        } else {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-10
            this.p2 = this.p2+1
            this.p3 = this.p3-12
            this.p4 = this.p4-1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
    }

    moveRight(rotated){
        if (!rotated) {
            if(!((this.p2+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3+1)%10 === 0) && !((this.p4+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }

    moveLeft(rotated){
        if(!rotated){
            if(!((this.p1-1)%10===0 && (this.p4-1)%10===0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3-1)%10 === 0) && !((this.p4-1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }
}

// square
class S extends Block{
    
    moveRight(){
        if(!((this.p2+1)%10 === 0) && !((this.p4+1)%10 === 0)){
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1+1
            this.p2 = this.p2+1
            this.p3 = this.p3+1
            this.p4 = this.p4+1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
    }

    moveLeft(){

        if(!((this.p2-1)%10===0 && (this.p4-1)%10===0)){
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-1
            this.p2 = this.p2-1
            this.p3 = this.p3-1
            this.p4 = this.p4-1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
        
    }
}
class L extends Block{
    rotate(){
        changeColour(this.p1,this.p2,this.p3,this.p4,'')
        this.p1 = this.p1+10
        this.p2 = this.p2-1
        this.p3 = this.p3+12
        this.p4 = this.p4+1
        console.log(this.p1,this.p2,this.p3,this.p4)
        changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
    }

    reverse(){
        console.log(this.p2%10)
        if (this.p2%10 === 0) {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-9
            this.p2 = this.p2+2
            this.p3 = this.p3-11
            this.p4 = this.p4
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        } else {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-10
            this.p2 = this.p2+1
            this.p3 = this.p3-12
            this.p4 = this.p4-1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
    }

    moveRight(rotated){
        if (!rotated) {
            if(!((this.p2+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3+1)%10 === 0) && !((this.p4+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }

    moveLeft(rotated){
        if(!rotated){
            if(!((this.p1-1)%10===0 && (this.p4-1)%10===0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3-1)%10 === 0) && !((this.p4-1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }
}
class T extends Block{
    rotate(){
        changeColour(this.p1,this.p2,this.p3,this.p4,'')
        this.p1 = this.p1+10
        this.p2 = this.p2-1
        this.p3 = this.p3+12
        this.p4 = this.p4+1
        console.log(this.p1,this.p2,this.p3,this.p4)
        changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
    }

    reverse(){
        console.log(this.p2%10)
        if (this.p2%10 === 0) {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-9
            this.p2 = this.p2+2
            this.p3 = this.p3-11
            this.p4 = this.p4
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        } else {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-10
            this.p2 = this.p2+1
            this.p3 = this.p3-12
            this.p4 = this.p4-1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
    }

    moveRight(rotated){
        if (!rotated) {
            if(!((this.p2+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3+1)%10 === 0) && !((this.p4+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }

    moveLeft(rotated){
        if(!rotated){
            if(!((this.p1-1)%10===0 && (this.p4-1)%10===0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3-1)%10 === 0) && !((this.p4-1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }
}
class D extends Block{
    rotate(){
        changeColour(this.p1,this.p2,this.p3,this.p4,'')
        this.p1 = this.p1+10
        this.p2 = this.p2-1
        this.p3 = this.p3+12
        this.p4 = this.p4+1
        console.log(this.p1,this.p2,this.p3,this.p4)
        changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
    }

    reverse(){
        console.log(this.p2%10)
        if (this.p2%10 === 0) {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-9
            this.p2 = this.p2+2
            this.p3 = this.p3-11
            this.p4 = this.p4
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        } else {
            changeColour(this.p1,this.p2,this.p3,this.p4,'')
            this.p1 = this.p1-10
            this.p2 = this.p2+1
            this.p3 = this.p3-12
            this.p4 = this.p4-1
            console.log(this.p1,this.p2,this.p3,this.p4)
            changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
        }
    }

    moveRight(rotated){
        if (!rotated) {
            if(!((this.p2+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3+1)%10 === 0) && !((this.p4+1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1+1
                this.p2 = this.p2+1
                this.p3 = this.p3+1
                this.p4 = this.p4+1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }

    moveLeft(rotated){
        if(!rotated){
            if(!((this.p1-1)%10===0 && (this.p4-1)%10===0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }else{
            if(!((this.p3-1)%10 === 0) && !((this.p4-1)%10 === 0)){
                changeColour(this.p1,this.p2,this.p3,this.p4,'')
                this.p1 = this.p1-1
                this.p2 = this.p2-1
                this.p3 = this.p3-1
                this.p4 = this.p4-1
                console.log(this.p1,this.p2,this.p3,this.p4)
                changeColour(this.p1,this.p2,this.p3,this.p4,this.colour)
            }
        }
    }
}



//-----------------listening for mouse clicks--------------
let rotated = false
let canRotate = true
window.addEventListener('keydown', function(e){
    
    if (canRotate) {

        if(e.key === 'ArrowUp'){
            if(b1.shape !== 's'){
                if(rotated){
                    b1.reverse()
                    rotated = false
                }else{
                    b1.rotate()
                    rotated = true
                }
            }
        }else if(e.key === 'ArrowRight'){
            b1.moveRight(rotated)
        }else if(e.key === 'ArrowLeft'){
            b1.moveLeft(rotated)
        }else if(e.key === 'ArrowDown'){
            b1.move()
        }

    }
})



var cell = document.getElementsByClassName('cell')
function changeColour(p1,p2,p3,p4,color) {
    cell[p1].style.backgroundColor = color
    cell[p2].style.backgroundColor = color
    cell[p3].style.backgroundColor = color
    cell[p4].style.backgroundColor = color
}

function chooseColour() {
    let colours = ['red', 'blue', 'yellow', 'violet','cyan']
    let colour = colours[Math.floor(Math.random()*5)]
    return colour
}

console.log(chooseColour())


// ---------------------making the block properties---------------
// let b1 = new Z(35,36,44,45,'z',chooseColour())
// let b1 = new S(35,36,45,46,'s',chooseColour())
let b1 = new T(35,36,37,46,'t',chooseColour())
console.log(b1)

setInterval(() => {
    if(b1.p1 + 10 <= total_blocks && b1.p2 + 10 <= total_blocks && b1.p3 + 10 <= total_blocks && b1.p4 + 10 <= total_blocks){
        // b1.move()
    }else{
        canRotate = false
    }
    // if(rotated){
    //     b1.rotate()
    //     rotated =false
    // }else{
    //     b1.reverse()
    //     rotated = true
    // }
}, 1000);






var j = 2
var j_old = 2
var flag = false

// setInterval(() => {
    // for (let i = 0; i < b1.length; i++) {
    //     cell[b1[i]].style.backgroundColor = 'red'
    //     if(flag === true){
    //         cell[j_old].style.backgroundColor = 'rgba(0, 0, 255, 0)'  
            
    //         j_old = j
    //     }
    //     flag = true
    //     j = j+10
    // }

// }, 1000);
