// const newNode = document.createTextNode(div_sizes[i]);
                // const newNode1 = document.createTextNode(div_sizes[j]);
                // divs[i].replaceChild(newNode, divs[i].childNodes[0]); 
                // divs[j].replaceChild(newNode1, divs[j].childNodes[0]); 
function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        console.log("pass",i);
        if(p>mid)
        {console.log("pass1",Arr[k]);

            // const newNode = document.createTextNode(div_sizes[k]);
            // const newNode1 = document.createTextNode(div_sizes[q++]);
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
            // div_sizes[k].replaceChild(newNode, divs[i].childNodes[k]); 
            // divs[q++].replaceChild(newNode1, divs[j].childNodes[q++]); 
            
        }
        else if(q>end)
        {    console.log("pass1",Arr[k]);
            // const newNode = document.createTextNode(div_sizes[k++]);
            // const newNode1 = document.createTextNode(div_sizes[p++]);
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
            // div_sizes[k++].replaceChild(newNode, divs[i].childNodes[k++]); 
            // divs[p++].replaceChild(newNode1, divs[j].childNodes[p++]); 
           
        }
        else if(div_sizes[p]<div_sizes[q])
        {console.log("pass1",Arr[k]);
            // const newNode = document.createTextNode(div_sizes[k++]);
            // const newNode1 = document.createTextNode(div_sizes[p++]);
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
            // div_sizes[k++].replaceChild(newNode, divs[i].childNodes[k++]); 
            // divs[p++].replaceChild(newNode1, divs[j].childNodes[p++]); 
            
        }
        else
        {
            console.log("pass1",Arr[k]);
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
            // const newNode = document.createTextNode(div_sizes[k++]);
            // const newNode1 = document.createTextNode(div_sizes[q++]);
            // div_sizes[k++].replaceChild(newNode, divs[i].childNodes[k++]); 
            // divs[q++].replaceChild(newNode1, divs[j].childNodes[q++]); 
            
        }
        
        console.log("pass6",i);
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
        // const newNode = document.createTextNode(div_sizes[k++]);
        //     const newNode1 = document.createTextNode(div_sizes[q++]);
        //     div_sizes[k++].replaceChild(newNode, divs[i].childNodes[k++]); 
        //     divs[q++].replaceChild(newNode1, divs[j].childNodes[q++]); 
    }
    // const newNode = document.createTextNode(div_sizes[k]);
    //     const newNode1 = document.createTextNode(div_sizes[q++]);
    //     Arr[k++].replaceChild(newNode, divs[i].childNodes[k]); 
    //     divs[q++].replaceChild(newNode1, divs[j].childNodes[q++]); 
}

function merge_partition(start,end)
{
    if(start < end)
    {
        console.log("pas0s",i);
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);
        
        merge_sort(start,mid,end);
        
    }
}
