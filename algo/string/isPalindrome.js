function isPalindrome(string) {
    let i = 0, j = string.length - 1;
    while (i < j) {
        if (string.charAt(i) != string.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
