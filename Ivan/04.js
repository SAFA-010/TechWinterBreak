// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    let x = numbers[0];
    for(i = 0;i < numbers.length;i++)
        if(x < numbers[i])
            x = numbers[i];
    return x;
}
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20