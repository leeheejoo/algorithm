#include <string>
#include <vector>
#include <queue>

using namespace std;

struct cmp{
    bool operator()(int a, int b){
        return a > b;
    }
};

int solution(int n, vector<int> lost, vector<int> reserve) {

    int answer = 0;
/*
    priority_queue<int,vector<int>,cmp> lostQueue;
    for(int i=0; i < lost.size(); i++)
        lostQueue.push(lost[i]);

    priority_queue<int,vector<int>,cmp> reserveQueue;
    for(int i=0; i < reserve.size(); i++)
        reserveQueue.push(reserve[i]);

    while(lostQueue.size() > 0){

        if(reserveQueue.size() == 0)
            break;

        int lostS = lostQueue.top();
        int reserveS = reserveQueue.top(); 

        if( reserveS >= lostS-1 && reserveS <= lostS + 1){
            lostQueue.pop();
            reserveQueue.pop();
        }
        else if (reserveS < lostS-1){
            reserveQueue.pop();    
        }
        else {
            //lostQueue.push(lostS+1);
            //reserveQueue.push(lostS+1);
            lostQueue.pop();
            reserveQueue.pop();
        }

    }

    return n - lostQueue.size();
*/
    return 0;
}

int main() {

    int n = 22;

    vector<int> lost;
    lost.push_back(12);
    lost.push_back(13);
    lost.push_back(16);
    lost.push_back(17);
    lost.push_back(19);
    lost.push_back(20);
    lost.push_back(21);
    lost.push_back(22);

    vector<int> reserve;
    reserve.push_back(1);
    reserve.push_back(22);
    reserve.push_back(16);
    reserve.push_back(18);
    reserve.push_back(9);
    reserve.push_back(10);

    int ret = solution(n, lost, reserve);
    printf("%d",ret);

    getchar();

    return 0;
}
