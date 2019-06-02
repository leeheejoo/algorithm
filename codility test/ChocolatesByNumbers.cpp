
#include <map>

using namespace std;

int solution(int N, int M) {

    map<int,bool> cache;

    int chocoNum = 0;
    cache.insert(make_pair(0,true));

    while(true){

        if(chocoNum+M >= N)
            chocoNum = (chocoNum+M)%N;
        else
            chocoNum = chocoNum+M;

        if(chocoNum >= N)
            break;

        map<int,bool>::iterator it = cache.find(chocoNum);
        if(it == cache.end()){
            cache.insert(make_pair(chocoNum,true));    
        }
        else
            break;
    }

    return cache.size();
}


int main() {

    //int ret = solution(1,3);
    int ret = solution(12,21);
   // int ret = solution(10,4);

    return 0;
}