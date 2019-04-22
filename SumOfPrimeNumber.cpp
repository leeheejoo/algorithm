/*
    임의의 수를 입력 받아 임의의 수보다 작은 소수의 합을 구하시오.
*/

#include <stdio.h>
#include <vector>

using namespace std;

long long calcSumOfPrimeNumber(int num) {

    long long answer = 0;
    
    vector<int> arr;

    for (int i = 0; i <= num; i++) {
        arr.push_back(i);
    }

    for (int i = 2; i <= num; i++) { 

        if (arr[i] == 0) 
            continue;

        for (int j = i + i; j <= num; j += i) { 
            arr[j] = 0;
        }
    }

    for (int i = 2; i <= num; i++) {
        if (arr[i] != 0){
            answer += arr[i];
        }
    }
    
    return answer;
}


int main() {

    int ret = calcSumOfPrimeNumber(7);
    printf("%d",ret);

    getchar();

    return 0;
}


