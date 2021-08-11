$(document).ready(function() {
	$("#q1").on('click',function(){
		if($('#q1 .more').is(":visible")) {
			$('#q1 .less').show();
			$('#q1 .more').hide();
		}
		else {
			$('#q1 .less').hide();
			$('#q1 .more').show();

		}

		});
	});

/*
	$(document).ready(function(){
	$("#q1").on("click", function(){
	if ($("#q1 .more").is(":visible")){
	$("#q1 .less").addClass(".hidden");
	}else{
	$("#q1 .more").removeClass(".hidden");
	}
	});
	});
*/

// singele line comment