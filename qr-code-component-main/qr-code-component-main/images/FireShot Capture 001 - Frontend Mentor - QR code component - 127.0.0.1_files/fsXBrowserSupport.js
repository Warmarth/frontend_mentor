/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
function isWindows(){return/^win/i.test(navigator.platform)}function isMac(){return/^mac/i.test(navigator.platform)}function isOpera(){return/opr\/\d+\./i.test(navigator.appVersion)||"pbjmgmedeliohhbaefhlplndokcbmjio"===chrome.runtime.id}function isEdge(){return/edg\/\d+\./i.test(navigator.appVersion)||"fcbmiimfkmkkkffjlopcpdlgclncnknm"===chrome.runtime.id}function isSafari(){return/apple/i.test(navigator.vendor)}function isFirefox(){return"firefox"===detectBrowser()}
function getBrowserId(){return isOpera()?"op":isEdge()?"edge":isSafari()?"safari":isFirefox()?"fx":"ch"}
function detectBrowser(){var a=chrome.runtime.id;if("legfpnnmhhnhjgekmmbkilmijnjoehne"===a)return isOpera()?"opera":isEdge()?"edge":"chrome";const b=["fireshot@getfireshot.com","fireshot-pro@getfireshot.com","fireshot-beta@getfireshot.com","{0b457cAA-602d-484a-8fe7-c1d894a011ba}","{5e11ab1e-083c-11e5-a6c0-1697f925ec7b}"],c=["fcbmiimfkmkkkffjlopcpdlgclncnknm"];return-1<["pbjmgmedeliohhbaefhlplndokcbmjio"].indexOf(a)?"opera":-1<b.indexOf(a)?"firefox":-1<c.indexOf(a)?"edge":"chrome"}
var extensionBrowser=detectBrowser(),crossBrowserVars={contractId:{chrome:"com.getfireshot.api",opera:"com.getfireshot.api",edge:"com.getfireshot.api",firefox:"com.getfireshot.api.firefox"},nativeFilePath:{chrome:"fireshot-chrome-plugin.dat",opera:"fireshot-chrome-plugin.dat",edge:"fireshot-chrome-plugin.dat",firefox:"fireshot-chrome-plugin.dat"}},key;for(key in crossBrowserVars)crossBrowserVars[key]=crossBrowserVars[key][extensionBrowser];
