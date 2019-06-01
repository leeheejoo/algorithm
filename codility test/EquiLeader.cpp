/*

A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

int solution(vector<int> &A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].

https://app.codility.com/demo/results/trainingJ6VQ56-86V/

*/

#include<vector>
#include<map>

using namespace std;

int solution(vector<int> &A) {

    map<int,int> countMap;

    vector<int> forward(A.size(),0);
    vector<int> reverse(A.size(),0);

    int maxCount = 0;
    int dominator = 0;
    int count = 1;

    for(int i=0; i < A.size(); i++){
        
        countMap[A[i]]++; 

        if(maxCount < countMap[A[i]]){
            maxCount = countMap[A[i]];
            dominator = A[i];    
        }  

        if(maxCount <= count/2)
            forward[i] = -1;
        else
            forward[i] = dominator;

        count++;
    }

    countMap.clear();
    maxCount = 0;
    dominator = 0;
    count = 1;

    for(int i= A.size()-1; i >= 0; i--){
        
        countMap[A[i]]++; 

        if(maxCount < countMap[A[i]]){
            maxCount = countMap[A[i]];
            dominator = A[i];    
        }  

        if(maxCount <= count/2)
            reverse[i] = -1;
        else
            reverse[i] = dominator;

        count++;
    }

    int ret = 0;
    for(int i=0; i < forward.size()-1; i++){

        if(forward[i] == -1)
            continue;

        if(forward[i] == reverse[i+1])
            ret++;
    }

    return ret;
}

int main() {

    //vector<int> A = {4,3,4,4,4,2};
    vector<int> A = {1, 2, 3, 4, 5};

    int ret = solution(A);

    return 0;
}