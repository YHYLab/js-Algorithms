/**
 * 퀵 정렬
 * 시간 복잡도: 최악 - O(n2), 최선 - O(nlogn), 평균 - O(nlogn) 
 * 공간 복잡도: O(1)
 * @param {Array} arr
 * @param {int} left
 * @param {int} right
 * @code
    var arr = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];
    quicksort(arr, 0, arr.length-1);
 */
var quicksort = function(arr, left, right) {
  
    if (left < right) {
          
        //기준점을 찾고 기준점을 중심으로 더 작은수, 더 큰수 분류 
        var i =  position(arr, left, right);
        //기준점 기준 좌측 정렬
        quicksort(arr, left, i - 1);
        //기준점 기준 우측 정렬
        quicksort(arr, i + 1, right);
    }
 
    return arr;
};

var position = function(arr, left, right) {
    var i = left;
    var j = right;
    var pivot = arr[left];

    //제자리 더 큰수/더 작은 수 좌우 배치.
    while (i < j) {
        while (arr[j] > pivot) j--;
        while (i < j && arr[i] <= pivot) i++;

        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    arr[left] = arr[j];
    arr[j] = pivot;

    return j;
}
