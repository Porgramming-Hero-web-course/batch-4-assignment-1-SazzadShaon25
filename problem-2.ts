{
    type RemoveDuplicates = (numbers: number[]) => number[];
    const removeDuplicates : RemoveDuplicates = (numbers) =>{
        const uniqueNumbers: number[] = [];
        let num: number ;
        for(num of numbers)
        {
            if(!uniqueNumbers.includes(num))
            {
                uniqueNumbers.push(num);
            }
        }
        return uniqueNumbers;
    }
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 3]);
    console.log(result);
}