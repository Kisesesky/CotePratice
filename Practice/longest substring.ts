function lengthOfLongestSubstring(s: string): number {
    let max:number = 0;
    let start:number = 0;
    let temp: Record<string, number> = {};

    for(let i =0; i < s.length; i++){
        if(temp[s[i]] !==undefined  && temp[s[i]] >= start){
            start = temp[s[i]] + 1
        }
        temp[s[i]] = i;

        max = Math.max(max, i-start+1)
    }
    return max;
};

function lengthOfLongestSubstring(s: string): number {

    let wordLength = 0
    for(let i = 0; i<s.length; i++){
        let currentWord = "" 
        for(let j = i; j<s.length; j++){
            let word = s[j];
            if(currentWord.includes(word))
                break;
            currentWord += word;
            wordLength = Math.max(wordLength, currentWord.length);
        }
        return wordLength
    };
}
//중복수를 구하지 못했다..
