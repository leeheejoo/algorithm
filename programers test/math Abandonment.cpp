/*

문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건

시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	        return
[1,2,3,4,5]	    [1]
[1,3,2,4,2]	    [1,2,3]

입출력 예 설명

입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.

*/

#include <string>
#include <vector>
#include <queue>

using namespace std;

struct question{
    int score;
    int idx;
};
 
struct cmp{
    bool operator()(question a, question b){
        return a.score < b.score;
    }
};
 
vector<int> solution(vector<int> answers) {

    vector<int> scores;
    scores.push_back(0);
    scores.push_back(0);
    scores.push_back(0);

    int ma1[5] = { 1, 2, 3, 4, 5 };
    int ma1len = 5;

    int ma2[8] = { 2, 1, 2, 3, 2, 4, 2, 5 };
    int ma2len = 8;

    int ma3[10] = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };
    int ma3len = 10;

    for(int i = 0; i < answers.size(); i++){

        int answer = answers[i];

        if( ma1[i%ma1len] == answer){
            scores[0]++; 
        }

        if( ma2[i%ma2len] == answer){
            scores[1]++; 
        }

        if( ma3[i%ma3len] == answer){
            scores[2]++; 
        }
    }

    priority_queue<question, vector<question>, cmp> questions;

    for(int i = 0; i < scores.size(); i++){
        question q;
        q.idx = i+1;
        q.score = scores[i];
        questions.push(q);
    }

    vector<int> ret;
    int hScore = 1;
    for(int i = 0; i < scores.size(); i++){

        if(questions.top().score >= hScore){
            ret.push_back(questions.top().idx);
            hScore = questions.top().score;
            questions.pop();
        }
    }

    return ret;
}


int main() {

    vector<int> answers;
    // answers.push_back(1);
    // answers.push_back(2);
    // answers.push_back(3);
    // answers.push_back(4);
    // answers.push_back(5);

    // answers.push_back(1);
    // answers.push_back(3);
    // answers.push_back(2);
    // answers.push_back(4);
    // answers.push_back(2);

    answers.push_back(1);
    answers.push_back(3);
    answers.push_back(2);
    answers.push_back(4);
    answers.push_back(2);
    answers.push_back(1);
    answers.push_back(3);
    answers.push_back(2);
    answers.push_back(4);
    answers.push_back(2);

    vector<int> ret = solution(answers);

    for(int i=0; i < ret.size(); i++) {
        printf(" %d",ret[i]);
    }

    getchar();

    return 0;
}
