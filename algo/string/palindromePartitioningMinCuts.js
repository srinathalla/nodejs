function palindromePartitioningMinCuts(string) {
    
    let palindromes = [];
    for(let i=0;i < string.length; i++)
    {
        let row = [];
        for(let j=0;j < string.length; j++)
        {
            row.push(false);
            if(i == j)
            {
                row[i] = true;
            }
        }
        palindromes.push(row);
    }

    for(let len=2;len <= string.length;len++)
    {
        for(let i=0;i < string.length - len + 1;i++)
        {
            let j = i + len -1;
            if(len == 2)
            {
                palindromes[i][j] = string.charAt(i) == string.charAt(j);
            }
            else {
                palindromes[i][j] = string.charAt(i) == string.charAt(j) && palindromes[i + 1][j - 1];
            }
        }
    }

    let cuts = [];
    for(let i=0;i < string.length;i++)
    {
        cuts[i] = i;
    }
    for(let i=0;i < string.length;i++)
    {
        if (palindromes[0][i])
        {
            cuts[i] = 0;
        }
        else {
            cuts[i] = cuts[i - 1] + 1;
            for(let j = 0; j < i; j++)
            {
                if(palindromes[j][i] && cuts[i] > cuts[j-1] + 1)
                {
                    cuts[i] = cuts[j-1] + 1;
                }
            }
        }
    }

    return cuts[string.length -1];
  }

console.log(palindromePartitioningMinCuts("a"));

console.log(palindromePartitioningMinCuts("noonabbad"));
  
  // Do not edit the line below.
  exports.palindromePartitioningMinCuts = palindromePartitioningMinCuts;
  