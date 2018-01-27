/**
 * bubble sort 
 * 최악 시간 복잡도 O(n2)
 * 마킹하는게 있으면 green => 최선 O(n)
 * 공간 복잡도 O(n)
 * 안정성 - 안전
 */

var bubble_sort = function(arr) {
    var n = arr.length;
    
    var green;
    for (var i = 0; i < n - 2; i++) {
        green = 1;
        console.log( i );
        for (var j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                green = 0;
            }
        }
        if(green === 1) break;
    }
    return arr;
};

var swap = function(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp; 
};

var a = [ 4, 1, 3, 1, 2, 5, 49, 3, 8, 9, 11, 7, 6, 5, 121, 54];
//var a = [ 1, 2, 3, 4, 5];

bubble_sort(a);