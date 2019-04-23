#include<iostream>
#include<vector>
using namespace std;

string solution(int n)
{
    string answer = "";
    int nCurrent = n - 1;

    while(nCurrent >= 0)
    {
        int nDivide = nCurrent / 3;
        int nRemain = nCurrent % 3;

        switch(nRemain)
        {
            case 0: answer.insert(0, "1"); break;
            case 1: answer.insert(0, "2"); break;
            case 2: answer.insert(0, "4"); break;
        }
        
        nCurrent = nDivide - 1;
    }

    return answer;
}

int main() {

    for(int i=1; i <= 20 ; i++){
        string ret = solution(i);
        printf("%d --> %s\n",i,ret.c_str());
    }

    getchar();

    return 0;
}