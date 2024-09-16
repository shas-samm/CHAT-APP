// 7 8 9 10 3 4 5 6
// key = 9

int search_tar(vector<int>& arr,int key){
    int n = arr.size();
    int low = 0 , high = n-1;
    while(low<=high){
        int mid = low + (high - low)/2;
        if(arr[mid] == key){
            return mid;
        }
        if(arr[mid] >= arr[low]){
            if(arr[mid] > key){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }
        else{
            if(key >= arr[mid] && key >= arr[low]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }
    }
    return -1;
}