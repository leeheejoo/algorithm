/*
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

int solution(vector<int> &A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].

https://app.codility.com/demo/results/training45RBZC-YFF/
*/
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> &A) {

    sort(A.begin(), A.end());

    int lengthA = A.size();
    int p1 = A[lengthA-1]*A[lengthA-2]*A[lengthA-3];
    int p2 = A[lengthA-1]*A[0]*A[1];

    return  p1>p2? p1:p2;
}

int main() {

    vector<int> A = {-3,1,2,-2,5,6};
    //vector<int> A = {-5,5,-5,4};
    //vector<int> A = {5,5,-5};

    int ret = solution(A);

    return 0;
}