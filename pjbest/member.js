

$.validator.addMethod("validAccount", function(a, b, c) {
    if (this.optional(b))
        return !0;
    return !($.isFunction(c) ? c() : c) || (/^(?![0-9]+$)[a-zA-Z0-9]{4,20}$/i.test(a) || /^[a-zA-Z]{4,20}$/i.test(a))
}, "Invalid format."),



$(function() {
    function a() {
        var a = $("#account");
        "未命名" == a.val() ? a.css("color", "red") : a.css("color", "#000")
    }
    function b() {
        var a = $("#account");
        a.val().length >= 32 && a.val("未命名").css("color", "red")
    }
    function c(a) {
        $(".gender input").each(function() {
            this.value == gender && (this.checked = !0)
        }),
        a ? $(".gender,.gender input").show() : ($(".gender,.gender input").hide(),
        $('.gender[gender="' + gender + '"]').show())
    }
    function d() {
        return "未命名" == $("#account").val()
    }
    function e() {
        mobile || $().toastmessage("showNoticeToast", "未绑定手机，将无法找回密码"),
        $("#input-form").addClass("form-lock"),
        $("#input-form input").addClass("read-only").attr("readonly", "readonly"),
        $("#input-form input").each(function() {
            $(this).removeAttr("placeholder")
        }),
        $("#edit-base").click(function() {
            var b = $(this);
            if (b.hasClass("save")) {
                $("#input-form input").each(function() {
                    $(this).removeAttr("placeholder")
                });
                $("#input-form").valid() && (j(b),
                f())
            } else
                b.addClass("save").html("保存"),
                g(),
                $("#input-form").removeClass("form-lock"),
                $("#input-form input").removeAttr("readonly").removeClass("read-only"),
                $("#edit-cancel").show(),
                c(!0),
                h(),
                "0" != isCorp && $("#company").addClass("read-only").attr("readonly", "readonly"),
                d() || $("#account").addClass("read-only").attr("readonly", "readonly"),
                a()
        }),
        $("#edit-cancel").click(function() {
            $(this).hide(),
            $("#input-form").addClass("form-lock"),
            $("#input-form input").attr("readonly", "readonly"),
            $("#edit-base").removeClass("save").html("修改"),
            c(!1),
            i(),
            a(),
            $("#input-form input").each(function() {
                $(this).removeAttr("placeholder")
            })
        }),
        $("#business-select").click(function() {
            location.href = contextPath + "/business/select"
        }),
        $("#my-pjbest").click(function() {
            location.href = personDefaultUrl
        })
    }
    function f() {
        "未命名" == $("#account").val() ? $("#userName").html("你好，" + $("#mobileNo").text()) : $("#userName").html("你好，" + $("#account").val())
    }
    function g() {
        $("#account").attr("placeholder", "请输入用户名"),
        $("#name").attr("placeholder", "请输入姓名"),
        $("#company").attr("placeholder", "请输入公司"),
        $("#department").attr("placeholder", "请输入部门"),
        $("#jobTitle").attr("placeholder", "请输入职位")
    }
    function h() {
        $('#input-form input[type="text"]').each(function() {
            var a = $(this)
              , b = a.val();
            a.attr("oldValue", b)
        })
    }
    function i() {
        $('#input-form input[type="text"]').each(function() {
            var a = $(this);
            a.val(a.attr("oldValue"))
        })
    }
    function j(b) {
        doAjaxSubmit($("#input-form")[0], function(d) {
            a(),
            d.result ? (b.removeClass("save").html("修改"),
            $("#input-form").addClass("form-lock"),
            $("#input-form input").attr("readonly", "readonly"),
            $("#edit-cancel").hide(),
            c(!1)) : tip.dealAjaxFailResult(d, $("#input-form"))
        }, function(a) {
            gender = $(".gender>input:checked").val(),
            a.gender = gender,
            "未命名" == a.account && (a.account = account)
        })
    }
    function k() {
        var a;
        $("#input-form").validate({
            onkeyup: !1,
            onclick: !1,
            onfocusout: !1,
            ignore: "",
            rules: {
                account: {
                    required: !0,
                    validAccount: function() {
                        return "未命名" != $("#account").val()
                    }
                },
                name: {
                    maxlength: 20
                },
                company: {
                    maxlength: 64
                },
                department: {
                    maxlength: 64
                },
                jobTitle: {
                    maxlength: 64
                }
            },
            messages: {
                account: {
                    required: "用户名不能为空",
                    validAccount: "用户名只能由字母和数字组成"
                },
                name: {
                    maxlength: "姓名长度不得超过20"
                },
                company: {
                    maxlength: "公司长度不得超过64"
                },
                department: {
                    maxlength: "部门长度不得超过64"
                },
                jobTitle: {
                    maxlength: "职位长度不得超过64"
                }
            },
            showErrors: function(b, c) {
                a = tip.dealTooltip(a, "#input-form input", c)
            },
            submitHandler: function(a) {}
        })
    }
    e(),
    k(),
    c(!1),
    b()
});
//# sourceMappingURL=member-info.min.js.map
