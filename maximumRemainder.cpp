#include<bits/stdc++.h>
using namespace std;

int main(){

    int n; cin >> n;
    long long mx = 0,smx=0,tmp;

    while(n--){
        cin >> tmp;
        if(tmp>mx){
            smx = mx;
            mx = tmp;
        }
    }
    cout << smx%mx << endl;
}