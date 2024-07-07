const crypto = require('crypto');

function calculator(operation,n1,n2){
    let result;
    switch(operation){
        case 'add':
            result=n1+n2;
            break;

        case 'sub':
            result=n1+n2;
            break;

        case 'mult':
            result=n1*n2;
            break;

        case 'divide':
            result=n1/n2
            break;

        case 'sin':
            result=Math.sin(n1);
            break;

        case 'cos':
            result=Math.cos(n1);
            break;
        
        case 'tan':
            result=Math.tan(n1);
            break;

        case 'random':
            if(!n1){
                console.log('provide length for random number')
            }else{

                result=crypto.randomBytes(n1).toString('binary');
            }
            break;

        default:
            console.log("invalid operation")

    }
    console.log(result)
}


// const args = process.argv.slice(2); 
// const operation = args[0];
// const n1 = parseFloat(args[1]);
// const n2 = parseFloat(args[2]);
// const randomLength = parseInt(args[3], 10);

const operation= process.argv[2];
const n1= Number(process.argv[3])
const n2=Number(process.argv[4])

calculator(operation,n1,n2);