#include<bits/stdc++.h>
using namespace std;

long long gcd(long long int a, long long int b)
{
  if (b == 0)
    return a;
  return gcd(b, a % b);
}
 

long long lcm(long long a, long long b)
{
    return (a*b )/( gcd(a, b));
}

int main(){

long long n1,n2; cin >> n1 >> n2;

cout << lcm(n1,n2) << endl;

}