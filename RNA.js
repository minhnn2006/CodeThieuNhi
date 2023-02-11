let A = ['A','T','G','G','C','A'];
let B = ['T','G','A','T','G'];
function main(A,B){
    let temp = [];
    for(let i=0; i<=B.length; i++){
        temp[i] = [];
        for(let j=0; j<=A.length; j++){
            temp[i][j] =0;
        }
    }

    for(let i=1; i<A.length; i++){
        for(let j=1; j<B.length; j++){
            if(A[j-1] == B[i-1]){
                console.log(A[j-1])
                console.log(B[i-1])
                temp[i][j] = temp[i-1][j-1] + 1;
            }
        }
    }
    console.table(temp);
    console.log(A[4],B[2]);
}
main(A,B)