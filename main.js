const { Console } = require('console')

rolls = (new Array(100)).fill(new Array(100))
rolls2play = (new Array(100)).fill(new Array(100))

function more_boar(i,j) {
    let intArri =  i.toString().split("").map(v => Number(v))
    let intArrj = j.toString().split("").map(v => Number(v))

    if (Math.max(intArri) > Math.max(intArrj) && Math.min(intArri) < Math.min(intArrj)) {
        return 0.5
    }
    return 0
}

function piggy(j) {
    let arrm = j.toString().split('').map(n => Number(n))
    return Math.abs(arrm[0]-arrm[1]) + 4
}

function hogGame(i,j) {
    if (i >= 100 || (i!== 0 && !i)) return 1
    if (j>=100 || (j!== 0 && !j)) return 0

    if (rolls[i][j] != null) return rolls[i][j]
    let probabilities = (new Array(9)).fill(0)
    for (let fd = 1; fd <=6; fd++) {
        probabilities[0] += (1/6) * ((1-hogGame(j,i+fd))+more_boar(i+fd,j) + hogGame(i+fd, j))
        if (fd == 1) {
            probabilities[0] = (1/6) * ((1-hogGame(j,i+fd))+more_boar(i+1,j) + hogGame(i+fd, j))
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            if (fd == 1 || sd == 1) {
                probabilities[1] += (1/36) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
            } else 
                probabilities[1] += (1/36) * ((1-hogGame(j,i+fd+sd)) +more_boar(i+fd+sd,j)+ hogGame(i+fd+sd, j))
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                if (fd == 1 || sd == 1 || td == 1) {
                    probabilities[2] += (1/216) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                } else 
                    probabilities[2] += (1/216) * ((1-hogGame(j,i+fd+sd+td))+more_boar(i+fd+sd+td,j) + hogGame(i+fd+sd+td, j))
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    if (fd == 1 || sd == 1 || td == 1 || ftd ==1) {
                        probabilities[3] += (1/1269) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                    } else 
                        probabilities[3] += (1/1296) * ((1-hogGame(j,i+fd+sd+td+ftd))+more_boar(i+fd+sd+td+ftd,j) + hogGame(i+fd+sd+td+ftd, j))
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        if (fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1) {
                            probabilities[4] += (1/7776) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                        } else 
                            probabilities[4] += (1/7776) * ((1-hogGame(j,i+fd+sd+td+ftd+fthd))+more_boar(i+fd+sd+td+ftd+fthd,j) + hogGame(i+fthd+fd+sd+td+ftd, j))
                    }
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        for (let std = 1; std <=6; std++) {
                            if (fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1 || std == 1) {
                                probabilities[5] += (1/46656) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                            } else 
                                probabilities[5] += (1/46656) * ((1-hogGame(j,i+fd+sd+td+ftd+fthd+std))+more_boar(i+fd+sd+td+ftd+fthd+std,j) + hogGame(i+fthd+fd+sd+td+ftd+std, j))
                        }
                    }
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        for (let std = 1; std <=6; std++) {
                            for (let svtd = 1; svtd <=6; svtd++) {
                                if (fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1 || std == 1 || svtd == 1) {
                                    probabilities[6] += (1/279936) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                                } else 
                                    probabilities[6] += (1/279936) * ((1-hogGame(j,i+fd+sd+td+ftd+fthd+std+svtd))+more_boar(i+fd+sd+td+ftd+fthd+std+svtd,j) + hogGame(i+fthd+fd+sd+td+ftd+std+svtd, j))
                            }
                        }
                    }
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        for (let std = 1; std <=6; std++) {
                            for (let svtd = 1; svtd <=6; svtd++) {
                                for (let ei = 1; ei <=6; ei++) {
                                    if (fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1 || std == 1 || svtd == 1 || ei ==1) {
                                        probabilities[7] += (1/1679616) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                                    } else 
                                        probabilities[7] += (1/1679616) * ((1-hogGame(j,i+fd+sd+td+ftd+fthd+std+svtd+ei))+more_boar(i+ei+fd+sd+td+ftd+fthd+std+svtd,j) + hogGame(i+fthd+fd+sd+td+ftd+std+svtd+ei, j))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        for (let std = 1; std <=6; std++) {
                            for (let svtd = 1; svtd <=6; svtd++) {
                                for (let ei = 1; ei <=6; ei++) {
                                    for (let ni = 1; ni <=6; ni++) {
                                        if (fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1 || std == 1 || svtd == 1 || ei ==1 || ni == 1) {
                                            probabilities[8] += (1/10077696) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                                        } else 
                                            probabilities[8] += (1/10077696) * ((1-hogGame(j,i+fd+sd+td+ftd+fthd+std+svtd+ei+ni))+more_boar(i+ei+ni+fd+sd+td+ftd+fthd+std+svtd,j) + hogGame(i+fthd+fd+ni+sd+td+ftd+std+svtd+ei, j))
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for (let fd = 1; fd <=6; fd++) {
        for (let sd = 1; sd <=6; sd++) {
            for (let td = 1; td <=6; td++) {
                for (let ftd = 1; ftd <=6; ftd++) {
                    for (let fthd = 1; fthd <=6; fthd++) {
                        for (let std = 1; std <=6; std++) {
                            for (let svtd = 1; svtd <=6; svtd++) {
                                for (let ei = 1; ei <=6; ei++) {
                                    for (let ni = 1; ni <=6; ni++) {
                                        for (let ti = 1; ti <=6; ti++) {
                                            if (ti==1 || fd == 1 || sd == 1 || td == 1 || ftd ==1 || fthd == 1 || std == 1 || svtd == 1 || ei ==1 || ni == 1) {
                                                if (ti==1 && fd == 1 && sd == 1 && td == 1 && ftd ==1 && fthd == 1 && std == 1 && svtd == 1 && ei ==1 && ni == 1)
                                                probabilities[9] = (1/60466176) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                                                else
                                                probabilities[9] += (1/60466176) * ((1-hogGame(j,i+1))+more_boar(i+1,j) + hogGame(i+1, j))
                                            } else 
                                                probabilities[9] += (1/60466176) * ((1-hogGame(j,ti+i+fd+sd+td+ftd+fthd+std+svtd+ei+ni))+more_boar(ti+i+ei+ni+fd+sd+td+ftd+fthd+std+svtd,j) + hogGame(i+fthd+fd+ni+sd+td+ftd+ti+std+svtd+ei, j))
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    let holdp = (1-hogGame(j,i + piggy(j))) + more_boar(i+piggy(j), j) + hogGame(i+piggy(j), j)

    probabilities.unshift(holdp)

    let maxP = probabilities.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
console.log(probabilities)
    rolls[i][j] = probabilities[maxP]
    rolls2play[i][j] = maxP
    console.log(`Computed ${i} ${j}`)
}

for (let i = 0; i < 100; i++)
    for (let j = 0; j<100; j++)
        hogGame(i,j)

        require('fs').writeFile(

            './results.json',
        
            JSON.stringify(rolls2play),
        
            function (err) {
                if (err) {
                    console.error('Crap happens');
                }
            }
        );