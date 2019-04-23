/*
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

제한사항
prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
prices의 길이는 2 이상 100,000 이하입니다.

입출력 예
    prices	         return
[1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]

입출력 예 설명
1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.
*/

#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    
    vector<int> answer;

    for(int i = 0; i < prices.size(); i++){

        int targetPrice = prices[i];
        int tm = 0;

        for(int p = i + 1; p < prices.size(); p++){

            int checkPrice = prices[p];

            tm++;
        
            if(targetPrice > checkPrice)
                break;

        }

        answer.push_back(tm);
    }

    return answer;
}


int main() {

    vector<int> prices;
    prices.push_back(1);
    prices.push_back(2);
    prices.push_back(3);
    prices.push_back(2);
    prices.push_back(3);

    vector<int> ret = solution(prices);
    for(int i=0; i < ret.size(); i++) {
        printf(" %d",ret[i]);
    }

    getchar();

    return 0;
}
