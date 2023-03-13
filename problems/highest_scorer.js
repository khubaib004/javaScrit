function highestScore(playerInfo){
    let scorer=playerInfo[0][0];
    let score=playerInfo[0][1];

    for(let x=1; x<playerInfo.length;x++){
        if (score<playerInfo[x][1]){
            score=playerInfo[x][1];
            scorer=playerInfo[x][0];
        }
    }
    return scorer;
}

let playerInfo= [
    ["Shakib",75],["Ashraful",30],["Tamim",90],["Masrafi",6],["Musfique",40]
];

let scorerS = highestScore(playerInfo);

document.write(scorerS)
