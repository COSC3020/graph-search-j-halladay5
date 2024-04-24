function depthFirstSearch(list, start, value)
{
    var path = [];
    if(list.length == 0)
    {
        return [];
    }
    
    var visited = Array(list.length).fill(0);
    
    if(start == value)
    {
        return [start];
    }
    
    search(list, start, value, visited, path);
    
    console.log(path);
    return path;
}

function search(list, start, value, visited, path)
{
    visited[start] = 1;
    
    if(start == value)
    {
        path.unshift(start);
        return true;
    }else{
        for(let i = 0; i < list[start].length; i++)
        {
            let startVal = list[start][i];
            if(visited[startVal] == 0)
            {
                if(search(list,startVal, value, visited, path)){
                    path.unshift(start);
                    return true;
                }
            }
        }
    }
    return false;
}

//Bonus
function BFS(graph, start, value)
{
    var path = [];
    var visited = new Array(graph.length).fill(0);
    
    if(Bsearch(graph,path, visited, start, value)== false)
    {
        return [];
    }
    path.unshift(start);
    return path;
}

function Bsearch(graph, path, visited, start, value)
{
    visited[start] = 1;
    var q = [];
    if(start == value)
    {
        return true;
    }
    
    for(var i = 0; i < graph[start].length; i++)
    {
        if(visited[graph[start][i]] == 0)
        {
            if(graph[start][i] == value)
            {
                path.unshift(graph[start][i]);
                return true;
            }else{
                q.push(graph[start][i]);
            }
        }
    }
    
    for(var j = 0; j< q.length; j++)
    {
        var p = Bsearch(graph,path, visited, q[j], value);
        if(p)
        {
            path.unshift(graph[start][j])
            return true;
        }
    }
    return false;
   
}
