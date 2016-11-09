angular.module('op.liveconference-templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("templates/application.jade",
    "<div class=\"conference-container\"><div class=\"container-fluid\"><div class=\"row\"><div ng-view></div></div></div></div>");
  $templateCache.put("templates/attendee-settings-dropdown.jade",
    "<ul role=\"menu\" class=\"dropdown-menu attendee-settings-dropdown\"><li role=\"presentation\" ng-class=\"{'disabled': attendee.mute &amp;&amp; !attendee.localmute}\"><a href=\"\" ng-click=\"toggleAttendeeMute()\" role=\"menuitem\" target=\"_blank\"><i ng-class=\"{'fa-microphone': !attendee.mute &amp;&amp; !attendee.localmute, 'fa-microphone-slash': attendee.mute || attendee.localmute}\" class=\"fa fa-fw conference-mute-button\"></i><span ng-if=\"attendee.localmute\">Unmute</span><span ng-if=\"!attendee.localmute\">Mute</span></a></li><li role=\"presentation\"><a href=\"\" ng-click=\"showReportPopup()\" role=\"menuitem\" target=\"_blank\"><i class=\"fa fa-fw fa-exclamation-triangle conference-report-button\"></i>&nbsp;Report</a></li></ul>");
  $templateCache.put("templates/attendee-video.jade",
    "<div dynamic-directive=\"attendee-video\" class=\"attendee-video\"><canvas data-video-id=\"{{videoId}}\" width=\"150\" height=\"150\" ng-click=\"onVideoClick(videoIndex)\" ng-mouseenter=\"thumbhover = true\" ng-mouseleave=\"thumbhover = false\" ng-init=\"count=0\" ng-class=\"{thumbhover: thumbhover, speaking: attendee.speaking &amp;&amp; (!attendee.mute &amp;&amp; !attendee.localmute)}\" class=\"conference-attendee-video-multi\"></canvas><a href=\"\" target=\"_blank\" ng-show=\"videoId !== 'video-thumb0' &amp;&amp; thumbhover\" ng-mouseenter=\"thumbhover = true\" ng-mouseleave=\"thumbhover = true\" ng-class=\"{'hidden': !isDesktop}\" class=\"hidden-xs\"><i data-placement=\"right-bottom\" data-html=\"true\" data-animation=\"am-flip-x\" bs-dropdown template=\"templates/attendee-settings-dropdown.jade\" class=\"fa fa-2x fa-cog conference-settings-button\"></i></a><i ng-show=\"attendee.mute || attendee.localmute\" class=\"fa fa-2x fa-microphone-slash conference-secondary-mute-button\"></i><i ng-show=\"false\" class=\"fa fa-2x fa-eye-slash conference-secondary-toggle-video-button\"></i><p class=\"text-center conference-attendee-name ellipsis\">{{attendee.displayName}}</p></div>");
  $templateCache.put("templates/attendee.jade",
    "<div class=\"col-xs-12 media nopadding conference-attendee\"><a href=\"#\" class=\"pull-left\"><img src=\"/images/user.png\" ng-src=\"/api/users/{{user._id}}/profile/avatar\" class=\"media-object thumbnail\"></a><div class=\"media-body\"><h6 class=\"media-heading\">{{user.firstname}} {{user.lastname}}</h6><button type=\"submit\" ng-disabled=\"invited\" ng-click=\"inviteCall(user); invited=true\" class=\"btn btn-primary nopadding\">Invite</button></div><div class=\"horiz-space\"></div></div>");
  $templateCache.put("templates/conference-video.jade",
    "<div id=\"multiparty-conference\" local-speak-emitter auto-video-switcher ng-style=\"paneStyle\" dynamic-directive=\"conference-video\" class=\"conference-video fullscreen\"><conference-user-video></conference-user-video><div ng-style=\"attendeesBarStyle\" class=\"conference-attendees-bar\"><ul scale-to-canvas ng-style=\"attendeesBarContentStyle\" class=\"content\"><li ng-repeat=\"id in conferenceState.videoIds\" ng-hide=\"!conferenceState.attendees[$index]\" dynamic-directive=\"attendee-thumbail-container\"><conference-attendee-video video-index=\"$index\" on-video-click=\"streamToMainCanvas\" video-id=\"{{id}}\" attendee=\"conferenceState.attendees[$index]\" show-report=\"showReport\"></conference-attendee-video></li></ul></div><conference-user-control-bar show-invitation=\"showInvitation\" on-leave=\"onLeave\" conference-state=\"conferenceState\"></conference-user-control-bar></div>");
  $templateCache.put("templates/invite-members.jade",
    "<div class=\"aside\"><div class=\"aside-dialog\"><div class=\"aside-content\"><div class=\"aside-header\"><h4>Members</h4></div><div class=\"aside-body\"><div ng-repeat=\"user in users\" class=\"row\"><conference-attendee></conference-attendee></div></div></div></div></div>");
  $templateCache.put("templates/live.jade",
    "<div class=\"col-xs-12\"><conference-video easyrtc=\"easyrtc\"></conference-video><conference-notification conference-id=\"{{conference._id}}\"></conference-notification></div>");
  $templateCache.put("templates/mobile-user-video-quadrant-control.jade",
    "<ul class=\"list-inline mobile-user-video-control\"><li><a href=\"\" ng-click=\"mute()\"><i ng-class=\"{'fa-microphone': !muted, 'fa-microphone-slash': muted}\" class=\"fa fa-5x fa-fw\"></i></a></li><li><a href=\"\" ng-click=\"onMobileToggleControls()\"><i class=\"fa fa-5x fa-fw fa-times\"></i></a></li><li><a href=\"\" ng-click=\"showReportPopup()\"><i class=\"fa fa-5x fa-fw fa-exclamation-triangle\"></i></a></li></ul>");
  $templateCache.put("templates/mobile-video.jade",
    "<canvas local-speak-emitter auto-video-switcher id=\"mobileVideo\" width=\"150\" height=\"150\"></canvas>");
  $templateCache.put("templates/user-control-bar.jade",
    "<div class=\"conference-user-control-bar text-center\"><ul dynamic-directive=\"live-conference-control-bar-items\" class=\"list-inline\"><li><a href=\"\" ng-click=\"toggleSound()\"><i ng-class=\"{'fa-microphone': !muted, 'fa-microphone-slash': muted}\" class=\"fa fa-2x conference-mute-button conference-light-button\"></i></a></li><li ng-class=\"{'hidden': noVideo}\"><a href=\"\" ng-click=\"toggleCamera()\"><i ng-class=\"{'fa-eye': !videoMuted, 'fa-eye-slash': videoMuted}\" class=\"fa fa-2x conference-toggle-video-button conference-light-button\"></i></a></li><li><a href=\"\" ng-click=\"leaveConference()\"><i class=\"fa fa-phone fa-2x conference-toggle-terminate-call-button conference-light-button\"></i></a></li><li><a href=\"\" ng-click=\"showInvitationPanel()\"><i class=\"fa fa-users fa-2x conference-toggle-invite-button conference-light-button\"></i></a></li><editor-toggle-element></editor-toggle-element></ul></div>");
  $templateCache.put("templates/user-video.jade",
    "<div class=\"user-video\"><div smart-fit from=\"#multiparty-conference\" class=\"canvas-container\"><canvas id=\"mainVideoCanvas\" ng-click=\"onMobileToggleControls()\" class=\"conference-main-video-multi\"></canvas><div user-time ng-show=\"remoteHour\" ng-style=\"{'color' : color}\" class=\"user-time\">{{remoteHour}}</div></div></div>");
}]);