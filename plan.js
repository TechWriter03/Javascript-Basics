const success = () => {
    return new Promise((resolve,reject) => {
        const err=false;
        if(!err)
            resolve(true);
        else
            reject(false);
    });
}

function celebrate() {
    console.log("I did it..!");
}

function setNewGoals() {
    console.log("Set new goals & work for it");
}

function keepTrying() {
    console.log("I will try my best");
}

const executePlan = async () => {
    const achieved = await success();
    if(achieved) {
        celebrate();
        setNewGoals();
    }
    else {
        keepTrying();
    }
}

executePlan();