/**
 * Created by ylt on 16/8/23.
 */

if (UNIT_TEST) {


    var uexImageCase = {

        "openCropper":function () {
            var data={
                mode:2
            };
            uexImage.openCropper(data,function(error,info){
                if(error==-1){
                    UNIT_TEST.log("操作取消");
                    UNIT_TEST.assert(true);
                }else if(error==0) {
                    UNIT_TEST.log(info.data);
                    UNIT_TEST.assert(true);
                }
            });
        }
    };

    UNIT_TEST.addCase("uexImageCase", uexImageCase);
}

