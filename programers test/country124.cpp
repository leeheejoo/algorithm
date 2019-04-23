#include <string>
#include <vector>
#include <algorithm>

using namespace std;

char map124[] = {'1','2','4'};

char toChar(int v)
{
   return map124[v];
}

string solution(int n) {
    string answer = "";

    while(true){

        int m = n/3;
        int r = n%3;

        answer.push_back(toChar(r));
        
        if(m < 3){
            answer.push_back(toChar(m));
            break;
        }
        else {
            n = m;
        }
    }

    reverse(answer.begin(), answer.end());

    return answer;
}

int main() {

    string ret = solution(11);
    printf("%s",ret.c_str());

    getchar();

    return 0;
}