/**
 *
 * T.C : O(n) where n is the length of the string.
 * 
 */
function balancedBrackets(string) {
    let stack = [];

    for(let i=0;i < string.length;i++)
    {
        let ch = string.charAt(i);
        if(ch == '(' || ch == '[' || ch == '{')
            stack.push(ch);
        else if (ch == ')')
        {
            if(stack.length == 0 || stack.pop() != '(')
                return false;
        }

        else if (ch == ']')
        {
            if(stack.length == 0 || stack.pop() != '[')
                return false;
        }

        else if (ch == '}')
        {
            if(stack.length == 0 || stack.pop() != '{')
                return false;
        }
    }

    return stack.length == 0;
  }

console.log(balancedBrackets("()[]{}{"));

console.log(balancedBrackets("((){{{{[]}}}})"));
  
  // Do not edit the line below.
  exports.balancedBrackets = balancedBrackets;
  