 
 var count=0;
 var list=document.getElementsByTagName("li");
 function Add ()
 {
	var content=prompt("请输入你的待办事项");
	if(content)
	{
		if(count>=12)
		{
			var x = document.getElementById("list-body");
			var para = document.createElement("li");
			x.appendChild(para);
			list[count].innerHTML="<input type='radio' name='item'>"+"<span>"+content+"</span>";
			x.scrollTo(0,100000000000000);
			count++;
		}
		else
		{
			list[count].innerHTML="<input type='radio' name='item'>"+"<span>"+content+"</span>";
			count++; 
		}
	}
 }
 
 function Delete ()
 {
	if(!count)
	{
		alert("当前没有待办事项");
	}
	else if(count>=13)
	{
		var selected=document.getElementsByTagName("input");
		var flag=0;
		for(var i=0;i<selected.length;i++)
		{
			if (selected[i].checked==true)
			{
				console.log("1");
				console.log(count);
					console.log(i);
				var x = document.getElementById("list-body");
				var child=list[i];
				x.removeChild(child);
				count--;
				flag=1;
				break;
			}
		}
		if(!flag)
		{
			alert("请选择要删除的事项");
		}
	}
	else
	{
		var selected=document.getElementsByTagName("input");
		var flag=0;
		for(var i=0;i<selected.length;i++)
		{
			if (selected[i].checked==true)
			{
				if(i==count-1)
				{
					console.log("2");
					console.log(count);
					console.log(i);
					list[count-1].innerHTML="";
					count--;
					flag=1;
					break;
				}
				else
				{
					console.log("3");
					console.log(count);
					console.log(i);
					if(count==12)
					{
						for(var j=i;j<count-1;j++)
						{
							list[j].innerHTML=list[j+1].innerHTML;
						}
						list[count-1].innerHTML="";
					}
					else
					{
						for(var j=i;j<count;j++)
						{
							list[j].innerHTML=list[j+1].innerHTML;
						}
						list[count-1].innerHTML="";
					}
					count--;
					flag=1;
					break;
				}
			}
		}
		if(!flag)
		{
			alert("请选择要删除的事项");
		}
	}
 }
 
 function Revise ()
 {
	if(!count)
	{
		alert("当前没有待办事项");
	} 
	else
	{
		var selected=document.getElementsByTagName("input");
		var content=document.getElementsByTagName("span");
		var flag=0;
		console.log(selected);
		for(var i=0;i<selected.length;i++)
		{
			if (selected[i].checked==true)
			{
				var newcontent=prompt("请修改你的待办事项",content[i].innerHTML);
				flag=1;
				content[i].innerHTML=newcontent;
			}
		}
		if(!flag)
		{
			alert("请选择要修改的事项");
		}
	}
 }