#include<bits/stdc++.h>
using namespace std;

int main(){

    string s1,s2,h="",m="";
    int mins = 0,hours=0;
    cin >> s1 >> s2;



    int tot = (stoi(s1.substr(0,2))*60 + stoi(s1.substr(3,2))) + (stoi(s2.substr(0,2))*60 + stoi(s2.substr(3,2)));
    if(tot%2) mins++;

    tot /=2;
    hours = tot/60;
    mins += tot%60;

    if(hours<10) h+='0';
    if(mins<10) m+='0';

    h+= to_string(hours);
    m+= to_string(mins);

    cout << h << ':' << m << endl;

    

    
}
