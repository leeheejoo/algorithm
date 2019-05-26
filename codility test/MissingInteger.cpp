/*
This is a demo task.

Write a function:

int solution(vector<int> &A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

https://app.codility.com/demo/results/trainingMXV5RF-UB9/

*/

#include <vector>
#include <set>

using namespace std;

int solution(vector<int> &A) {

    int value = 1;

    set<int> setA(A.begin(), A.end());

    set<int>::iterator itr = setA.begin();

    for(; itr != setA.end(); itr++){

        if((*itr) < 1)
            continue;
        else {
            if((*itr) == value)
                value++;
            else
                return value;
        }
    }  

    return value;
}

int main() {

    //vector<int> A = {-1,-3};
    //vector<int> A = {1,2,3};
    vector<int> A = {1,3,6,4,1,2};

    int ret = solution(A);

    return 0;
}