#include <bits/stdc++.h>
using namespace std;

bool isPerfectSquare(int num)
{
    int first = 0, last = num, mid;

    if(num == 0)
        return false;

    if(num == 1)
        return true;
    
    while(first <= last)
    {
        mid = (first + last) / 2;
        if(num / mid == mid)
        {
            if(num % mid == 0)
                return true;
            
            return false;
        }

        if(num / mid > mid)
            first = mid + 1;
        
        else
            last = mid - 1;
    }

    return false;
}

int main()
{
    int n; cin >> n;
    cout << isPerfectSquare(n) << endl;
}