var Deer = {
	nameSpaceName:"Deer",
	mapDEFToID:"true",
	//onclick:'redNose()',
	url:"./Deer/Deer.x3d",
	
	redNose:function(event){
		//console.log(event.target);
		//console.log(event.currentTarget );
		//console.log(this );
		var id =$(event.currentTarget).attr("id");
		//debugger
        if(document.getElementById(id+'__MA_Nose').getAttribute('diffuseColor')!= '1 0 0')
            document.getElementById(id+'__MA_Nose').setAttribute('diffuseColor', '1 0 0');
        else
            document.getElementById(id+'__MA_Nose').setAttribute('diffuseColor', '0 0 0');
			//document.getElementById(id+'__Deer_Armature_TRANSFORM').setAttribute('translation', '0 0 0');
			console.log($(event.currentTarget) );
			console.log($(event.target));
			//$(event.currentTarget).hide();
			$(event.currentTarget).attr("render","false");
    },
	init:function(){
		
		//debugger
		return;
	}
}

/*function tt(){
	alert("this is deer.js");
}
*/

