jQuery(document).ready(function($){
	var request = {
		campaign_id: 	$('#campaign_id').val(),
		feed: 			$('#feed').val(),
		item_hash: 		$('#item_hash').val(),
		nonce_get_item: $('#nonce_get_item').val(),
		action: 		'wpematico_preview_get_item',
	};
	console.log(request);
	$.post(wpematico_preview_item.ajax_url, request, function(response) {
		$('#preview-post-content').html(response);
	})
	.fail(function(jquery_xhr) {
		alert('Error: '+jquery_xhr.responseText);
	})
});