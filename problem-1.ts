{
    type SumArray = (num : number[]) => number;

    const sumArray : SumArray =(num)=>{
        let sum: number = 0;
        let i: number;
        for(i=0; i<num.length; i++)
        {
            sum = sum + num[i];
        }
        return sum;
    }
    const result = sumArray([1, 2, 3, 4, 5])
    console.log(result);
}