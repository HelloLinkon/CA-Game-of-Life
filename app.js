$(document).ready(function(){

	// var i,j;

	// for(i=0; i< 10; i++)
	// {
	// 	$(".stage").append("<div class='row"+i+"'></div>")
	// 	for(j=0; j<50; j++)
	// 	{
	// 		$(".row"+i).append("<div class='box'></div>")
	// 	}
	// }

	function gameoflife()
	{
		var a,b ;
		for(a=1; a<iMax-1; a++)
		{
			for(b=1; b<jMax-1; b++)
			{
				var count =0;
				count = f[a-1][b-1]+f[a-1][b]+f[a-1][b+1]+
						f[a][b-1]+f[a][b+1]+ 
						f[a+1][b-1]+f[a+1][b]+f[a+1][b+1];

				// console.log("f"+a+b+": " + count);
				if(count == 3 && f[a][b] == 0)
					f1[a][b] = 1;
				else if(count >=4 && f[a][b] == 1)
					f1[a][b] = 0;
				else if(count >=2 && f[a][b] == 1)
					f1[a][b] = 1;
				else if(count <=1 && f[a][b] == 1)
					f1[a][b] = 0;
				// f[a][b] = count;

			}


		}


	}

	var iMax = 55;
	var jMax = 55;
	var f = new Array();

	for (i=0;i<iMax;i++) {
	 f[i]=new Array();
	 for (j=0;j<jMax;j++) {
	  f[i][j]=0;
	 }
	}

	f[3][4] = 1;
	f[3][5] = 1;
	f[3][6] = 1;
	f[2][6] = 1;
	f[1][5] = 1;

	var f1 = new Array();

	for (i=0;i<iMax;i++) {
	 f1[i]=new Array();
	 for (j=0;j<jMax;j++) {
	  f1[i][j]=0;
	 }
	}

	function step(){
		f1 = new Array();

		for (i=0;i<iMax;i++) {
		 f1[i]=new Array();
		 for (j=0;j<jMax;j++) {
		  f1[i][j]=0;
		 }
		}
		gameoflife();
		// console.log(f1);
		f = f1;
		console.log(f);
		$(".stage").html("");
		for (i=1;i<iMax-1;i++) {
			$(".stage").append("<div class='row"+i+"'></div>");
			for (j=1;j<jMax-1;j++) {
				if(f[i][j] == 1)
			  		$(".row"+i).append("<div class='box"+j+" black'></div>");
			  	else
			  		$(".row"+i).append("<div class='box"+j+"'></div>");
			 }
		}

		// $(".row2 .box2").addClass('black');
	}

	
	for (i=1;i<iMax-1;i++) {
			$(".stage").append("<div class='row"+i+"'></div>");
			for (j=1;j<jMax-1;j++) {
				if(f[i][j] == 1)
			  		$(".row"+i).append("<div class='box"+j+" black' data-row='"+i+"'></div>");
			  	else
			  		$(".row"+i).append("<div class='box"+j+"' data-row='"+i+"'></div>");
			 }
		}
	

	$("#btn").click(function(){
		// for(var k =0; k< 10; k++)
			step();
	});

	// $('div').on('click', function(){
	//     var temp = $(this).attr("data-row");
	//     console.log(temp);
	// });

	


});