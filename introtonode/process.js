

const print =()=>{
    const args =process.argv.splice(2);
    const name =args 
    return `Hey my name is ${name}`
}

console.log(print("raju"))