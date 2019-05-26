/*

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

int solution(vector<int> &A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

https://app.codility.com/demo/results/trainingJYVP6C-H8J/

*/

#include <vector>

using namespace std;

int solution(vector<int> &A) {
    
    int sumOfInput = 0;

    for(int i=0; i < A.size(); i++)
        sumOfInput += A[i];

    int sumValue = 0;

    for(int i=1; i <= A.size()+1 ; i++)
        sumValue += i;  

    return sumValue - sumOfInput;
}

int main() {

    vector<int> A = {2,3,1,5};

    int ret = solution(A);

    return 0;
}