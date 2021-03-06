import { mobileViewSize, urlify, tryReach } from "/imports/library/utilities.js";
import { getEmailfromUid } from "/imports/library/appUtilities.js";

Template.registerHelper("userConnected", Meteor.userId );

Template.registerHelper("lineBreakText", ( str = "" ) => ( str.replace(/\n/g, "<br>") ) );

Template.registerHelper("urlify", str => ( urlify( str ) ) );

Template.registerHelper("mobileViewSize", mobileViewSize );

Template.registerHelper("windowSize", key => ( ( [ "height", "width", "ratio" ].indexOf( key ) >= 0 ) && ( window.size.get( key ) ) ) );

Template.registerHelper("getUserName", uid => ( tryReach( Meteor.user( uid, ['username'] ), 'username' ).value ) );

Template.registerHelper("equals", ( a, b ) => ( a == b ) );

Template.registerHelper("notequals", ( a, b ) => ( a != b ) );

Template.registerHelper("logContext", context => ( console.log( context || this ) ) );

Template.registerHelper("getEmailfromUid", uid => ( getEmailfromUid( uid ) ) );

Template.registerHelper("isCordova", f => Meteor.isCordova );
