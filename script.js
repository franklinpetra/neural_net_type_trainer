// Neural Net below //
// note: the hiddenLayer option can be increased if results are not accurate. It is set to the default now, which is 3.//
const net = new brain.NeuralNetwork({
    // hiddenLayers: [4, 5, 6]
})


//train our neural net to only see "either or" and not neither and not both, then I ran the color text training and took the data from the console.log and fed it back into the trainer//
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":
{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.7771907119267609,
"g":0.28567316864391223,"b":0.30432781681192345},"output":[1]},{"input":
{"r":0.9288881910071205,"g":0.810271076534808,"b":0.17426062292765065},
"output":[0]},{"input":{"r":0.7116426629362678,"g":0.5579356050129569,
"b":0.2325338141484028},"output":[1]},{"input":{"r":0.17986328683099173,
"g":0.7458479010442336,"b":0.5403509264294686},"output":[1]},{"input":{"r":0.4631636450838925,
"g":0.8401121105207252,"b":0.5720753911658267},"output":[0]},{"input":{"r":0.2669783836364461,
"g":0.06341526194713443,"b":0.4116720245223586},"output":[1]},{"input":{"r":0.18252877513195576,
"g":0.8521973630137867,"b":0.16182158794065282},"output":[1]},{"input":{"r":0.45632571335046723,
"g":0.6162471475519307,"b":0.7655635079864882},"output":[1]},{"input":{"r":0.26907779036947077,
"g":0.07167942321466692,"b":0.8817855971997599},"output":[1]},{"input":{"r":0.20431575536228763,
"g":0.4659084839351473,"b":0.45781722209435727},"output":[0]},{"input":{"r":0.9769676888477787,
"g":0.980418260132814,"b":0.9298868099780473},"output":[0]},{"input":{"r":0.8598863821538805,
"g":0.17565883642861957,"b":0.9157536154249752},"output":[0]},{"input":{"r":0.6916610559164806,
"g":0.7702163003026388,"b":0.6986179085887616},"output":[0]},{"input":{"r":0.7568716659263119,
"g":0.013653330687203313,"b":0.74553662371092},"output":[1]},{"input":{"r":0.38780258544088997,
"g":0.6746711065846642,"b":0.8798578003443454},"output":[0]},
{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":
{"r":0.7771907119267609,"g":0.28567316864391223,"b":0.30432781681192345},"output":[1]},{"input":
{"r":0.9288881910071205,"g":0.810271076534808,"b":0.17426062292765065},"output":[0]},{"input":
{"r":0.7116426629362678,"g":0.5579356050129569,"b":0.2325338141484028},"output":[1]},{"input":
{"r":0.17986328683099173,"g":0.7458479010442336,"b":0.5403509264294686},"output":[1]},{"input":
{"r":0.4631636450838925,"g":0.8401121105207252,"b":0.5720753911658267},"output":[0]},{"input":
{"r":0.2669783836364461,"g":0.06341526194713443,"b":0.4116720245223586},"output":[1]},{"input":
{"r":0.18252877513195576,"g":0.8521973630137867,"b":0.16182158794065282},"output":[1]},{"input":
{"r":0.45632571335046723,"g":0.6162471475519307,"b":0.7655635079864882},"output":[1]},{"input":
{"r":0.26907779036947077,"g":0.07167942321466692,"b":0.8817855971997599},"output":[1]},{"input":
{"r":0.20431575536228763,"g":0.4659084839351473,"b":0.45781722209435727},"output":[0]},{"input":
{"r":0.9769676888477787,"g":0.980418260132814,"b":0.9298868099780473},"output":[0]},{"input":
{"r":0.8598863821538805,"g":0.17565883642861957,"b":0.9157536154249752},"output":[0]},{"input":
{"r":0.6916610559164806,"g":0.7702163003026388,"b":0.6986179085887616},"output":[0]},{"input":
{"r":0.7568716659263119,"g":0.013653330687203313,"b":0.74553662371092},"output":[1]},{"input":
{"r":0.38780258544088997,"g":0.6746711065846642,"b":0.8798578003443454},"output":[0]}]


// actively train on that data with the  net.train(data)
net.train(data)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

let color
setRandomColor()

// get buttons functioning and (1) represents white //
whiteButton.addEventListener('click',() => {
    chooseColor(1)
})

blackButton.addEventListener('click',() => {
    chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value){
    data.push({
        input:color,
        output:[value]
    })
    setRandomColor()
}

// the print button circles the training data back into our neural net //
function print(){
    console.log(JSON.stringify(data))
}

function setRandomColor(){
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    }

    // setting up the guess text to respond to the background color //
    const guess = net.run(color)[0]
    guessE1.style.color = guess > .5 ? '#FFF':'#000'    
    
    colorE1.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`

}

// below creates the neural net diagram // 
// // const diagram = document.getElementById('diagram')
// diagram.innerHTML= brain.utilities.toSVG(net)

console.log(net.run({ r: 1, g: 1, b: 0 }))

// net.run launches the neural net //
// Notes: The reason the output is 0.934etc.. is because the algorithm is always learning and thus it's results will be close to the values but not exactly the values. //
//  Created this via a tutorial by Kyle from here: https://www.youtube.com/watch?v=60c4rMq-aH0&list=TLPQMDYwOTIwMjBKtOJBJkftJw&index=3 //