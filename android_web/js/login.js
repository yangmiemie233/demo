Bmob.initialize("2cb04c095c3a5828848a8ad31cb3fa99", "fcd60678682c06ff1824173ea39a9ad1");
function login(){
    var username = document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var Manager = Bmob.Object.extend("Manager");
    var query = new Bmob.Query(Manager);
    query.equalTo("username",username);
    query.find({
        success: function(aa) {
            // 查询成功，调用get方法获取对应属性的值
            alert(aa.length)
            if (aa.length!=0)
            {
                for (var i = 0; i < aa.length; i++) {
                    var object = aa[i];
                    if (object.get('password')==password) {
                        alert(object.id + ' - ' + object.get('password'));
                        window.location.href="list.html"
                    }
                    else alert("用户密码不相等")
                }
            }else {
                alert("用户名输入错误！请重新输入")
            }
        },
        error: function(object, error) {
            alert("查询错误")
        }
    })

}

$("#submit").click(function () {
    login();
})