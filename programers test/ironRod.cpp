#include <string>
#include <vector>
#include <stack>

using namespace std;

std::string replaceAll(std::string str, const std::string& from, const std::string& to) {
    size_t start_pos = 0;
    while((start_pos = str.find(from, start_pos)) != std::string::npos) {
        str.replace(start_pos, from.length(), to);
        start_pos += to.length(); 
    }
    return str;
}

int solution(string arrangement) {
    int answer = 0;

    arrangement = replaceAll(arrangement, "()","1");

    stack<int> values;

    for(int i=0; i<arrangement.size(); i++){

        if(arrangement[i] == '(')
            values.push(1);
        else if(arrangement[i] == ')'){
            values.pop();
            answer += 1;
        }
        else
            answer += values.size(); 
    }

    return answer;
}

int main() {

    string arrangement("()(((()())(())()))(())");   // 1(((11)(1)1))(1)

    int ret = solution(arrangement);
    printf(" %d",ret);

    getchar();

    return 0;
}