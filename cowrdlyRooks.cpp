#include<bits/stdc++.h>
using namespace std;

int main(){
    int t; cin >> t;
    int n,m,x,y; 
    while (t--)
    {
        cin >> n >> m;
        for(int i=0; i<m; i++)
        {
            cin >> x >> y;
        }
        cout << (n==m?"NO":"YES") << endl;
        
    }
    
}