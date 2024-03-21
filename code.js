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
