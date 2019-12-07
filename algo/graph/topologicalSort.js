/**
 * T.C : O(j + d), S.C O(j +d)
 * @param {} jobs 
 * @param {*} deps 
 */
function topologicalSort(jobs, deps) {
    let graph = {}
    let visited = {}

    for (job of jobs) {
        graph[job] = [];
        visited[job] = false;
    }

    for (dep of deps) {
        graph[dep[1]].push(dep[0]);
    }

    let result = [];
    let dfsStack = new Set();
    for (job of Object.keys(graph)) {
        if (!visited[job]) {
            cycleDetected = dfs(job, graph, visited, result, dfsStack);
            if (cycleDetected) {
                return [];
            }
        }
    }

    return result;
}


function dfs(job, graph, visited, result, dfsStack) {
    if (dfsStack.has(job)) {
        return true;
    }
    dfsStack.add(job);

    for (adjJob of graph[job]) {
        if (!visited[adjJob]) {
            cycleDetected = dfs(adjJob, graph, visited, result, dfsStack);
            if (cycleDetected) {
                return true;
            }
        }
    }

    visited[job] = true;
    result.push(job);
    dfsStack.delete(job);

    return false;
}

jobs1 = [1, 2, 3, 4]
deps1 = [
    [1, 2],
    [1, 3],
    [3, 2],
    [4, 2],
    [4, 3]
]
console.log(topologicalSort(jobs1, deps1));

jobs2 = [1, 2, 3, 4, 5, 6, 7, 8];
deps2 = [
    [3, 1],
    [8, 1],
    [8, 7],
    [5, 7],
    [5, 2],
    [1, 4],
    [6, 7],
    [1, 2],
    [7, 6]
];
console.log(topologicalSort(jobs2, deps2));

// Do not edit the line below.
exports.topologicalSort = topologicalSort;