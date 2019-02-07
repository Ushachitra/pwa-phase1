// function getfile(file,callback){
//     var htp=new XMLHttpRequest();
//     htp.overrideMimeType("application/json");
//     htp.open('GET',file,true);
//     htp.onreadystatechange=function(){
//         if(htp.readyState===4 && htp.status=="200"){
//             callback(htp.responseText);
//         }
//     }
//     htp.send(null);
// }
// getfile("dynamic.json",function(text){
//     let data=JSON.parse(text);
//     console.log(data);
//     profile(data.profile);
//     // career(data.career);
//     // edu(data.education);    
// })
// var left=document.querySelector(".left");
// function profile(p){
//    var pimg=document.createElement("img");
//    pimg.src=p.img;
//    left.appendChild(pimg);
   // var ph3=document.createElement("h3");
   // ph3.textContent=p.name;
   // left.appendChild(ph3);

//    var proll=document.createElement("p");
//    proll.textContent=p.roll;
//    left.appendChild(proll);

//    var pins=document.createElement("p");
//    pins.textContent=p.institute;
//    left.appendChild(pins);

//    var pplace=document.createElement("P");
//    pplace.textContent=p.place;
//    left.appendChild(pplace);
// }
// var right=document.querySelector(".right");
// function career(car){

//     var hc=document.createElement("h1");
//     hr innerHTML="Resume";
//     right.appendChild(hc);

//     var cc=document.createElement("h2");
//     cc.innerHTML="career objective:";
//     right.appendChild(cc);

//     var chr=document.createElement("hr");
//     right.appendChild(chr);

//     var cp=document.createElement("p");
//     cp.innerHTML=char.info;
//     right.appendChild(cp);
// }
// function edu(e){
//     var ed=document.createElement("h2");
//     ed.innetHTML="Educational Details";
//     right.appendChild(ed);

//     var ehr=document.createElement("hr");
//     right.appendChild(ehr);

//     var etable=document.createElement("etable");
//     etable.border="1";
//     var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>yop</td></tr>";
//     var tr2="";
//     for(i=0;i<e.length;i++){
//         tr2=tr2+"<tr><td>"+
//     }

// }
// }









































function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
             callback(htp.responseText);
	}
		}
		htp.send(null);
}

getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile)
	career(data.career);
    education(data.education);
    lang(data.languages);
})


var left=document.querySelector(".leftdiv");
function profile(p){
	var pimg=document.createElement("img");
    pimg.src=p.img;
    left.appendChild(pimg);
    var ph3=document.createElement("h3");
    ph3.textContent=p.name;
    left.appendChild(ph3);

    var proll=document.createElement("p");
    proll.textContent=p.roll;
    left.appendChild(proll);

   
	right.appendChild(hc);

	var cc=document.createElement("h2");
	cc.innerHTML="Career objective";
	right.appendChild(cc);

	var chr=document.createElement("hr");
	right.appendChild(chr);

	var cp=document.createElement("p");
	cp.innerHTML=car.info;
    right.appendChild(cp);
}
   function edu(e){
    var ed=document.createElement("h2");
    ed.innerHTML="Educational details";
    right.appendChild(ed);
    var  ehr=document.createElement("hr");
    right.appendChild(ehr);
    var etable=document.createElement("table");
    etable.border="1";
    var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>yop</td></tr>";
    var tr2="";
    for(i=0;i<e.length;i++){
    	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";

    }
    etable.innerHTML=tr1+tr2;
    right.appendChild(etable);
}
function lan(l){
    var llan=document.careerElement("p");
    llan.textContent=l.language;
    right.appendChild(llan);
}








