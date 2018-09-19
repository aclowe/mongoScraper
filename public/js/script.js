// scrape new articles on click of "scrape new articles"
$(document).on("click", "#scrape", function() {
  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    .done(function(data) {
      location.reload();
      console.log("Scrape complete!");
    });
    
});

// add comments to article
$(document).on("click", "#submit", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      comment: $("#comment").val(),
    }
  })
    .done(function(data) {
      $("#comment").empty(),
      location.reload();
      console.log("Comment added!");
    });
    
});
