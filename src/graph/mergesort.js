/**
 * 병합 정렬
 * 1. 데이터를 좌우 두개 그룹으로 분리한다.
 * 2. 좌그룹을 재귀로 정렬한다.
 * 3. 우그룹을 재귀로 정렬한다.
 * 4. 정렬한 두 그룹을 머지한다.
 * 
 * 시간 복잡도 최선 O(nlogn) 최악 O(nlogn) 평균 O(nlogn)
 * 공간 복잡도 O(n) 
 */

var mergesort = function(arr, left, right){
    if (right > left) {
        var mid = parseInt((left + right) / 2);
        console.log("mid => " + mid);
        console.log("left => " + left);
        console.log("right => " + right);
        mergesort(arr, left, mid);
        mergesort(arr, mid+1, right);
        merge(arr, left, mid, right);
    }
    return arr;
};

var merge = function(arr, left, mid, right){
    var j = mid+1;
    var i = left;
    var current = left;
    var tmp_left = [];
    var tmp_i = 0;
    
    for(; i <= mid; i++){
        tmp_left[tmp_i] = arr[i];
        tmp_i++;
    }

    var tmp_i = 0;
    while(tmp_i <= ( mid - left ) && j <= right) {
        if(tmp_left[tmp_i] < arr[j]){
            arr[current] = tmp_left[tmp_i];
            tmp_i++;
        }else{
            arr[current] = arr[j];
            j++;
        }
        current++;
    }

    while(tmp_i <= (mid - left) ) {
        arr[current] = tmp_left[tmp_i];
        tmp_i++;
        current++;
    }
};

var a = [ 1, 3, 4, 8, 9, 11, 24, 2, 5, 6, 8, 11, 23, 52, 118, 59];
mergesort(a, 0, a.length - 1);