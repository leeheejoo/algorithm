/*

A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.

A semiprime is a natural number that is the product of two (not necessarily distinct) prime numbers. The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.

You are given two non-empty arrays P and Q, each consisting of M integers. These arrays represent queries about the number of semiprimes within specified ranges.

Query K requires you to find the number of semiprimes within the range (P[K], Q[K]), where 1 ≤ P[K] ≤ Q[K] ≤ N.

For example, consider an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
The number of semiprimes within each of these ranges is as follows:

(1, 26) is 10,
(4, 10) is 4,
(16, 20) is 0.
Write a function:

vector<int> solution(int N, vector<int> &P, vector<int> &Q);

that, given an integer N and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M elements specifying the consecutive answers to all the queries.

For example, given an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
the function should return the values [10, 4, 0], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..50,000];
M is an integer within the range [1..30,000];
each element of arrays P, Q is an integer within the range [1..N];
P[i] ≤ Q[i].

https://app.codility.com/demo/results/training2PRARJ-RNP/

*/
#include <vector>

using namespace std;

vector<int> solution(int N, vector<int> &P, vector<int> &Q) {

    vector<int> primeNumners;
    vector<int> ret;

    if(N==1){
        ret.push_back(0);
        return ret;
    }
        
    // 소수 구하기
    for (int n = 2; n < N; n++)
    {
        int i = 2; 
        for (; i < n; i++)
            if (n%i == 0)
                break;
        if (i == n)
            primeNumners.push_back(n);
    }

    for(int i=0; i<P.size();i++){
        int p = P[i];
        int q = Q[i];

        int count = 0;

        for(int n=0; n <= primeNumners.size(); n++){

            int prime1 = primeNumners[n];

            if(prime1*prime1 > q)
                break;

            for(int y=n; y < primeNumners.size(); y++){

                int prime2 = primeNumners[y];

                if( prime1*prime2 < p)
                    continue;  
                else if(prime1*prime2 <= q)
                    count++;
                else
                    break;  
            }
        }   

        ret.push_back(count);
    }

    return ret;
}

int main() {

    //vector<int> P = {1,4,16};
    //vector<int> Q = {26,10,20};
    //vector<int> ret = solution(26,P,Q);

    vector<int> P = {1};
    vector<int> Q = {1};
    vector<int> ret = solution(1,P,Q);

    return 0;
}