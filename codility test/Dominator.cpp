/*
An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

int solution(vector<int> &A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

https://app.codility.com/demo/results/trainingXF2A24-239/

*/

#include<vector>
#include<map>

using namespace std;

int solution(vector<int> &A) {

    map<int,int> countMap;

    int maxCount = 0;
    int dominator = -1;

    for(int i=0; i < A.size(); i++){
        countMap[A[i]]++; 

        if(maxCount < countMap[A[i]]){
            maxCount = countMap[A[i]];
            dominator = A[i];    
        }  
    }

    if(maxCount <= A.size()/2)
        return -1;

    for(int i=0; i < A.size(); i++){
        if(A[i] == dominator)
            return i;
    }

    return -1;
}

int main() {

    vector<int> A = {2, 1, 1, 3};

    int ret = solution(A);

    return 0;
}