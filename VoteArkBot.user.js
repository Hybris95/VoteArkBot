// ==UserScript==
// @name VoteArk
// @namespace VoteArk
// @include https://toparkservers.com/server/108.61.122.15:21001/
// @include https://toparkservers.com/server/108.61.122.15:21001/vote
// @version 1
// @grant none
// ==/UserScript==
function init()
{
function vote()
{
$('.fa-thumbs-o-up') [0].click();
}
$('body').css('background-image', 'none');
setTimeout(vote, 60000 * 5);
}
setTimeout(init, 3000);
