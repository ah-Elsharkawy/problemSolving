#include <bits/stdc++.h>
using namespace std;

long long sequence_sum(long long n)
{
    return (n * (n + 1) / 2);
}

int arrangeCoins(int n)
{
    int first = 0, last = n;
    long long mid;

    while (first <= last)
    {
        mid = (first + last) / 2;
        if (sequence_sum(mid) == n)
            return mid;

        if (sequence_sum(mid) > n)
        {
            last = mid - 1;
            if (last < first)
                return last;
        }

        else
        {
            first = mid + 1;
            if (first > last)
                return first - 1;
        }
    }

    return -1; // returns -1 if n is 0
}



int main()
{
    int n;
    cin >> n;

    cout << "the number of complete rows: " << arrangeCoins(n) << endl;
}