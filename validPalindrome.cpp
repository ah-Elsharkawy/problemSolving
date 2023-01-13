#include<bits/stdc++.h>
using namespace std;


bool isPalindrome(string s){
    transform(s.begin(),s.end(),s.begin(),::tolower);
    string p = "";

    for(int i=0; i<s.size(); i++){
        if(regex_match (s[i],regex("[a-z0-9]"))) p+=s[i];
    }

    for(int i=0; i<p.size()/2; i++){    

        if(p[i]!=p[p.size()-1-i]) return false;
    }

    return true;
}

int main()
{
    /* string s; cin >> s;
    transform(s.begin(),s.end(),s.begin(),::toupper);
    s.erase(0,1);
    cout << s << endl; */
    string s; cin >> s;
    cout << isPalindrome(s) << endl;

}