/**
 * Created by ylt on 16/8/23.
 */

if (UNIT_TEST) {


    var uexMobileArkCase = {

        "initSSOAgent":function () {
            uexMobileArk.initSSOAgent(function (resultCode,resultMessage) {
                UNIT_TEST.log("resultCode："+resultCode);
                UNIT_TEST.assert(true);
            });
        },
        "getToken":function () {
            uexMobileArk.getToken(function (resultCode,resultMessage, token) {
                UNIT_TEST.log("resultCode："+resultCode+"  token: "+token);
                UNIT_TEST.assert(true);
            });
        },
        "getParam":function () {
            uexMobileArk.getParam("loginname",function (resultCode,resultMessage, value) {
                UNIT_TEST.log("loginname:  "+value);
                UNIT_TEST.assert(true);
            });
        },
        "checkAppVersion":function () {
            uexMobileArk.checkAppVersion("","",function (code, resultMessage,upDateFlag, downloadUrl,fileSize,updateScription) {
                UNIT_TEST.log("code:  "+code);
                UNIT_TEST.assert(true);
            });
        },
        "showGestureView":function () {
            uexMobileArk.showGestureView(function(code, resultMessage){
                UNIT_TEST.log("code:  "+code+"  resultMessage: "+resultMessage);
                UNIT_TEST.assert(true);
            })
        }
    };

    UNIT_TEST.addCase("uexMobileArk", uexMobileArkCase);
}

