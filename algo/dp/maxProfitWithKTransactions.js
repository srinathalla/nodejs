/**
 * 
 * T.C : O(n*k) S.C : O(n*k)
 */
function maxProfitWithKTransactions(prices, k) {

    if(prices.length <=1)
	{
			return 0 ;
	}
    
    let profits = [];

    for(let t=0; t <=k;t++)
    {
        let row = [];
        for(let p of prices)
        {
           row.push(0);
        }
        profits.push(row);
    }

    for(let t=1; t <= k; t++)
    {
        profit = -prices[0];
        for(let i=1;i < prices.length;i++)
        {
            profits[t][i] = Math.max(profits[t][i-1], prices[i] + profit);
            profit = Math.max(profit, profits[t-1][i] - prices[i]);
        }
    }

    return profits[k][prices.length -1];
  }


console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2));
  
  // Do not edit the line below.
  exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
  