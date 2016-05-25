// ==UserScript==
// @name VoteArk
// @namespace VoteArk
// @include https://toparkservers.com/server/108.61.122.15:21001/
// @include https://toparkservers.com/server/108.61.122.15:21001/vote
// @version 1
// @grant none
// ==/UserScript==
var startWithinSec = 2;
var minutesForNext = 1;

function init()
{
  var secForNext = minutesForNext * 60;
  var msForNext = secForNext * 1000;
  function vote()
  {
    $('.fa-thumbs-o-up') [0].click();
  }
  function setupHybrisToolBar()
  {
    var hybrisHeader = $('#hybrisHeader');
    if (hybrisHeader.length > 0) // Reload
    {
      hybrisHeader.remove();
    } 
    else
    {
      $('head').append('<style type="text/css" id="hybrisPlug-css"></style>')
    }
    hybrisHeader = $('#hybrisHeader');
    if (hybrisHeader.length == 0)
    {
      $('#page_html_data').append('<div id="hybrisHeader"></div>');
      hybrisHeader = $('#hybrisHeader');
    }
    hybrisHeader.hide();
    hybrisHeader.css('position', 'absolute');
    hybrisHeader.css('bottom', '150px');
    hybrisHeader.css('z-index', 9);
    hybrisHeader.css('background-color', '#282C35');
    hybrisHeader.css('padding-left', '50px');
    hybrisHeader.css('border-top-right-radius', '4px');
    hybrisHeader.css('border-bottom-right-radius', '4px');
    
    hybrisHeader.append('<p id=\"currentDateText\">Bot Active<br />Started at : '+ new Date($.now()) +'<br />Next push : ' + new Date($.now()+msForNext) + '</p>');
    var currentDateText = $("#currentDateText");
    currentDateText.css("color", "white");
    
    hybrisHeader.css('height', '150px');
    hybrisHeader.css('width', '250px');
    hybrisHeader.slideDown();
  }
  $('body').css('background-image', 'none');
  setTimeout(vote, msForNext);
  setupHybrisToolBar();
}
setTimeout(init, startWithinSec * 1000);
