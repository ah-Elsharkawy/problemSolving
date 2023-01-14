#include<bits/stdc++.h>
using namespace std;


bool isPalindrome(string s, int i,int j){
    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        }
        else return false;
    }
    return true;
}

bool validPalindrome(string s){
    int i=0,j=s.size()-1;

    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        }
        else{
            return isPalindrome(s,i+1,j) || isPalindrome(s,i,j-1);
        }
    }

    return true;
}

int main()
{
    string s; cin >> s;
    cout << validPalindrome(s) << endl;

}