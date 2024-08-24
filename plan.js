const success = () => {
    return new Promise((resolve,reject) => {
        const err=false;
        if(!err)
            resolve(true);
        else
            reject(false);
    });
}

function learnMore() {
    console.log("I will learn more")
}

function keepTrying() {
    console.log("I will try my best");
}

const executePlan = async () => {
    try {
        const achieved = await success();
        if(achieved)
            learnMore();
    }
    catch(e) {
        keepTrying();
    }
}

executePlan();