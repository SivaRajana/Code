const matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

function rotateMatrix(matrix) {
    
    const result = []
    
    let top = 0;
    let right = matrix[0].length-1;
    let left = 0;
    let bottom = matrix.length-1;
    
    while(top <= bottom && left <= right){
       
        for(let i = top; i<= right; i++){
            
            result.push(matrix[top][i])
        }
        top++;
        for(let i = top; i<= bottom; i++){
           
            result.push(matrix[i][right])
        }
        right--;
        for(let i = right; i >= left; i--){
          
            result.push(matrix[bottom][i])
        }
        bottom--;
        for(let i = bottom; i >= top; i--){
           
            result.push(matrix[i][left])
        }
        left++
    }
    console.log(result)
}

rotateMatrix(matrix)
