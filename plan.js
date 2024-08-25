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
    console.log("I did it..!")
}

function keepTrying() {
    console.log("I will try my best");
}

const executePlan = async () => {
    const achieved = await success();
    if(achieved)
        celebrate();
    else
        keepTrying();
}

executePlan();