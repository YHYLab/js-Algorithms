/**
 * 깊이 우선 탐색
 * 
 * 풀이 과정:
 * 
    출발 노드를 OPEN 에 삽입;
    while not empty(OPEN) do
        n = OPEN 의 제일 앞 노드;
        n을 OPEN 에서 제거하여 CLOSED 에 넣음;

        if depth(n) < 깊이 제한 then
            노드 n을 확장 하여 모든 후계노드를 생성;
            생성 후계 노드들에 부모노드 n을 가리키는 포인터를 첨부;

            if 후계노드 중 목표노드가 존재 then
                그 후계노드로부터 포인터를 역으로 추적하여 풀이경로 구성;
                return 탐색성공;
            else
                후계노드를 OPEN의 앞에 넣음;
            end-if;
        end-if;
    end-while;

    return 탐색 실패;
 * 
 */


// 인접리스
var get_adjacency_arr = function(vertex_arr, edge_arr) {
    var adjacency_arr = [];
    var v_len = vertex_arr.length;
    var e_len = edge_arr.length;
    for(var i = 0; i < v_len; i++){
        var adjacency = [];
        for(var j = 0; j < e_len; j++){
            if (vertex_arr[i] === edge_arr[j][0]) {
                adjacency.push(edge_arr[j][1]);
            } else if (vertex_arr[i] === edge_arr[j][1]) {
                adjacency.push(edge_arr[j][0]);
            }
        }
        adjacency_arr.push(adjacency);
    }

    return adjacency_arr;
};

// 경로 구하기
var get_path = function(current, child_node, CLOSED){
    // 경로 추적.
    var parent = current;
    var path = [];
    path.push(child_node.v);
    while(parent){
        path.push(parent.v);
        var closed_len = CLOSED.length;
        if (parent.p !== null) {
            for(var j = 0; j < closed_len; j++) {
                var closed_data = CLOSED[j];
                if (closed_data.v === parent.p) {
                    parent = closed_data;
                    break;
                }
            }
        }else {
            parent = null;
        }
    }

    return path.reverse();
};

// 깊이 우선 탐색
var f_dfs = function(data) {
    var adjacency_arr = get_adjacency_arr(data.vertex_arr, data.edge_arr);

    var OPEN = [{v: data.vertex_arr[0], p: null}];
    var CLOSED = [];
    var path = [];
    
    while(OPEN) {
        var current = OPEN.pop();
        CLOSED.push(current);
        if(!current) {
            OPEN = null;
            continue;
        }
        console.log("search node: " + current.v);
        var children_arr = adjacency_arr[current.v];
        var children_len = children_arr.length;
        for (var i = 0; i < children_len; i++) {
            var child_node = { v: children_arr[i], p: current.v};
            if(data.result === data.text_arr[child_node.v]) {

                path = get_path(current, child_node, CLOSED);
                OPEN = null;
                break;
            } else {
                var closed_len = CLOSED.length;
                var is_closed = false;
                for(var j = 0; j < closed_len; j++) {
                    var closed_data = CLOSED[j];
                    if (closed_data.v === child_node.v) {
                        is_closed = true;
                        break;
                    }
                }
                if (!is_closed) {
                    OPEN.push(child_node);
                }
            }
        }
    }

    return path;
};

// 테스트 데이터
var test_data = {}; 
test_data.result = "phone"; // 목표값
test_data.text_arr = ["sky", "apple", "game", "computer", "phone", "google"]; // 실제 노드의 값
test_data.vertex_arr = [ 0, 1, 2, 3, 4, 5]; // 간단하게 추상화한 노드리스트
test_data.edge_arr = [[0, 1], [1, 2], [2, 3], [1, 3], [2, 4], [3, 5]]; // 엣지리스트
/**
 * 0 - 1 - 2 - 4 
 *     ㄴ   ㄴ 3  - 5 
 * 
 */

var path = f_dfs(test_data);
console.log(path);