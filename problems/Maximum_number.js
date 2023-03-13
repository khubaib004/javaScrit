function highestScore(scores){
    let max=scores[0];
    for (let i=1; i<scores.length; i++){
        if (max<scores[i]){
            max=scores[i];
        }
    }
    return max;
}

let scores= [21,32,43,24,55,64]

let maximum=highestScore(scores);

document.write(maximum)
