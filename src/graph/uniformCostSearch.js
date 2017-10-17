/**
 * 균일비용 탐색
 * 
 * 풀이 과정:
 * 
    출발 노드를 OPEN 에 삽입, 출발노드의 경로비용은 0;
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