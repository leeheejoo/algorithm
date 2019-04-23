#include <string>
#include <vector>
#include <queue>
using namespace std;

int solution(vector<int> priorities, int location) {

    int answer = 0;

    priority_queue<int> printPriority;

    for(int i=0; i < priorities.size(); i++){
        printPriority.push(priorities[i]);
    }

    int idx = 0;

    while(true){

        int priority = priorities[idx];

        if(priority >=  printPriority.top()){

            answer++;
     
            if(location == idx){
                break;
            }

            printPriority.pop();
        }
        else {
         
            priorities.push_back(priority);
           
            if(location == idx)
                location = priorities.size()-1;
        }

        // debug 확인용
        //priorities[idx] = 0;
        idx++;
    }

    return answer;
}

int main() {
/*
    vector<int> priorities;
    priorities.push_back(2);
    priorities.push_back(1);
    priorities.push_back(3);
    priorities.push_back(2);

    int ret = solution(priorities,2);
    printf(" %d",ret);
*/
    vector<int> priorities;
    priorities.push_back(1);
    priorities.push_back(1);
    priorities.push_back(9);
    priorities.push_back(1);
    priorities.push_back(1);
    priorities.push_back(1);

    int ret = solution(priorities,0);
    printf(" %d",ret);

    getchar();

    return 0;
}