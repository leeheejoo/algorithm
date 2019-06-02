/*

You are given an array A consisting of N integers.

For each number A[i] such that 0 ≤ i < N, we want to count the number of elements of the array that are not the divisors of A[i]. We say that these elements are non-divisors.

For example, consider integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
For the following elements:

A[0] = 3, the non-divisors are: 2, 6,
A[1] = 1, the non-divisors are: 3, 2, 3, 6,
A[2] = 2, the non-divisors are: 3, 3, 6,
A[3] = 3, the non-divisors are: 2, 6,
A[4] = 6, there aren't any non-divisors.
Write a function:

vector<int> solution(vector<int> &A);

that, given an array A consisting of N integers, returns a sequence of integers representing the amount of non-divisors.

Result array should be returned as a vector of integers.

For example, given:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
the function should return [2, 4, 3, 2, 0], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..50,000];
each element of array A is an integer within the range [1..2 * N].

https://app.codility.com/demo/results/trainingE8MYGP-PJG/

*/
#include <vector>
#include <map>

using namespace std;

vector<int> solution(vector<int> &A) {

    map<int,int> cache;
    vector<int> ret;

    for (int i = 0; i < A.size(); i++)
    {
        int count = 0;

        map<int,int>::iterator it = cache.find(A[i]);
        if (it != cache.end()){
            ret.push_back(it->second);    
            continue;
        }

        for (int j = 0; j < A.size(); j++){
            if (A[j] == 1 || A[j] == A[i])
                continue;

            if(A[i]%A[j] != 0)
                count++;
        }

        ret.push_back(count);    
        cache.insert(make_pair(A[i],count));
    }

    return ret;
}

int main() {

    vector<int> A = {1,1,1,1,1};
    //vector<int> A = {3,1,2,3,6};
    vector<int> ret = solution(A);

    return 0;
}