{
    type CountWordOccurrences = (sentence: string, word: string) => number;
    const countWordOccurrences: CountWordOccurrences = (sentence, word) =>{
        const wordsArray : string [] = sentence.replace(/[.,!?]/g, "").split(" ");
        let currentWord : string;
        let count: number = 0
        for(currentWord of wordsArray)
        {
            if(currentWord.toLowerCase() === word.toLocaleLowerCase())
            {
                count ++;
            }
        }
        return count
    }
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result);
}