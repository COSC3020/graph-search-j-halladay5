[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M24O3lId)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case of depth first is when all nodes are traversed before finding the target node. In this case every node and edge is visited at least once, and if it is already marked as visited then 
the it's edges have also already been traversed recursively, so they are also visited. So if it visits every edge and every vertice only once, then the time complexity would be $\Theta(edges + vertices)$.


## Bonus

Implement and analyze breadth-first search.

The worst case of breadth-first search is when all levels of depth of the graph is searched before finding the element at deepest level of the last edge. In this case, all vertices will be searched, and all edges
connected to those vertices will be searched. So the time complexity is (V+E), where V stands for all the vertices in the graph, and E stands for all the edges in the graph. The time complexity would be 
$\Theta(V+E)$.
