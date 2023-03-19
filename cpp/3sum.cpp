 #include<bits/stdc++.h>
 using namespace std;
 
 vector<int> twoSum(vector<int>& numbers, int target) {
        int i=0, j=numbers.size()-1;
        vector<int> result{1,2};

        while(i < j){
            if(target-numbers[j] > numbers[i]){
                i++;
            }
            else if(target-numbers[j] < numbers[i]){
                j--;
            }
            else{
                result[0] = i+1;
                result[1] = j+1; 
                break;
            }
        }
        return result;
    }

 int main(){


    vector<int> nums{-1,0};
    twoSum(nums,-1);



 }