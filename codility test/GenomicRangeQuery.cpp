/*
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

vector<int> solution(string &S, vector<int> &P, vector<int> &Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as a vector of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.

https://app.codility.com/demo/results/training4PYN6T-ECK/

*/
#include <vector>
#include <map>
#include <algorithm>
#include <string>

using namespace std;

// vector<int> solution(string &S, vector<int> &P, vector<int> &Q) {

//     // init
//     map<char,int> mapDna;
//     mapDna.insert(make_pair('A',1));
//     mapDna.insert(make_pair('C',2));
//     mapDna.insert(make_pair('G',3));
//     mapDna.insert(make_pair('T',4));

//     vector<int> ret;

//      for( int i=0; i<P.size(); i++){
//         int idxP = P[i];
//         int idxQ = Q[i];

//         string subS = S.substr(idxP,idxQ-idxP+1);
//         sort(subS.begin(), subS.end());

//         ret.push_back(mapDna[subS.at(0)]);
//      }

//      return ret;
// }

vector<int> solution(string &S, vector<int> &P, vector<int> &Q) {

    vector<int> ret;

     for( int i=0; i<P.size(); i++){

        int idxP = P[i];
        int idxQ = Q[i];
        int minDna = 9999;

        for( int s =idxP; s <= idxQ; s++){

            char dna = S.at(s);
            if(minDna > int(dna)){
                 minDna = int(dna);
            }
        }

        if(minDna == 'A'){
            ret.push_back(1);
        }else if(minDna == 'C'){
            ret.push_back(2);
        }else if(minDna == 'G'){
            ret.push_back(3);
        }else if(minDna == 'T'){
            ret.push_back(4);
        }
     }

     return ret;
}

int main() {

    vector<int> P = {2,5,0};
    vector<int> Q = {4,5,6};
    string S = "CAGCCTA";

    vector<int> ret = solution(S, P, Q);

    return 0;
}