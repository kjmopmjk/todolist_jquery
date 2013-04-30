function addListItem() {
	var text = $("#new-text").val();
	$("#todo").append('<li class="done"><input type="checkbox" /> '+text+' <button class="delete"><img src="noun_project_2909.svg" class="icon_img" class="delete" /></button></li>');
	$("#new-text").val("");
}

function deleteItem() {
	$(this).parent().remove();
}

function finishItem() {
    if ( $(this).parent().css("textDecoration") === "line-through" ) {
    	$(this).parent().css("textDecoration", "none");
    } else {

        $(this).appendTo('#completed');
	    $(this).parent().css("textDecoration", "line-through");
    }
} 


$(function() {
    $("#add").on("click", addListItem);
    $(".delete").on("click", deleteItem);
    $(".done").on("click", finishItem);


    $(document).on("click", ".done", finishItem);
    $(document).on("click", ".delete", deleteItem);
});

