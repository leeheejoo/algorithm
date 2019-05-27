/*

A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

int solution(string &S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".

https://app.codility.com/demo/results/training6EQ66N-D5H/

*/

#include <stack>
#include <string>

using namespace std;

int solution(string &S) {
    
    if(S.size() == 0)
        return 1;

    stack<char> st;

    for(int i=0; i<S.size(); i++){
        if(S[i] =='('){
            st.push(S[i]);
        }
        else if(S[i] ==')'){

            if(st.size() == 0)
                return 0;
            else if(st.top() == '('){
                st.pop();
            }
        }
    }

    return st.size() > 0 ? 0 : 1;
}

int main() {

    string S = "(()(())())";
    //string S = "())";
    int ret = solution(S);

    return 0;
}