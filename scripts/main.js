$(document).ready( function() {

// Declare variables for each item property

var itemList = $('#items');
var itemTitle,
    itemPrice,
    itemCurrency,
    itemImage,
    itemMaker,
    itemURL;

// Find each item property and put into the DOM

  items.results.forEach( function(item) {

    var imageUrl = item.Images[0].url_170x135;

    itemImage = '<div class="itemImage">' + '<a href="' + item.url + ' ">' + ' <img src=" ' + imageUrl + ' " /> ' + '</a>' + '</div>';
    itemTitle = '<div class="itemTitle">' + item.title + '</div';
    itemMaker = '<div class="itemMaker">' + item.Shop.shop_name + '</div>';
    itemPrice = '<div class="itemPrice">' + '$' + (item.price + ' ' + item.currency_code) + '</div>';


    var itemHolder = '<li class="itemBox">' + itemImage + '<div class="itemInfo">' + itemTitle + itemMaker + itemMaker + itemPrice + '</div>' + '</li>';

    itemList.append(itemHolder);

  });

// Drop search term into DOM

var searchTerm = $('#searchTerm');
var resultCount = $('#resultCount');

// Drop result count into DOM

$('#resultCount').html('(' + items.count + 'Results)');

});
