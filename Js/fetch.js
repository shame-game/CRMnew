/* Thêm khách hàng */
// Nút thêm khách hàng

vam('.additems').addEventListener('click', () => {
    vam('.addKH').setAttribute('style', 'transform: translateX(0)')
    vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
})
// Nút thoát màn hình thêm khách hàng 
vam('.clostadd').addEventListener('click', () => {
    vam('.addKH').setAttribute('style', 'transform: translateX(100%)')
    vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
})
// Thoát màn hình thêm khách hàng bằng màn hình ngoài
vam('.bg-more-dark').addEventListener('click', () => {
    vam('.addKH').setAttribute('style', 'transform: translateX(100%)')
    vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
})

var dataname = []
// tìm kiếm khách hàng theo tên 

/* Lấy dữ liệu khách hàng */
var dataKH = [];
var index = vams('.items').length + 1;


function DataName(callback) {
    fetchSheet
        .fetch({
            gSheetId: "1PNf5Yvl9yyPByBG9oaDD-_IiJE6N1f0femguCtiUH7o",
            wSheetName: "tbKhachHang"
        })
        .then((rows) => {
            rows.forEach((t) => {
                dataname = dataname.concat(t['Tên khách hàng']);
            })
            callback(dataname)
        });
}

window.onload = function () {
    // load dữ liệu khách hàng 
    fetchSheet
        .fetch({
            gSheetId: "1PNf5Yvl9yyPByBG9oaDD-_IiJE6N1f0femguCtiUH7o",
            wSheetName: "tbKhachHang"
        })
        .then((rows) => {
            dataname = rows
            dataKH = rows;
            HienThiKH(rows, '#KHlist')
            ChiTietKH(rows, '#main-boxmore')
            UpdateKH(rows, '#main-boxmore')
            HDWrap(rows, '#main-boxmore')
            BTUpdatettKH()
            fetchSheet
                .fetch({
                    gSheetId: "1PNf5Yvl9yyPByBG9oaDD-_IiJE6N1f0femguCtiUH7o",
                    wSheetName: "tbHoaDon"
                })
                .then((rows) => {
                    dataKH = rows;
                    lockihoadon(rows)
                    TinhHinhTieuThu(rows, '#thttKH_main')
                    HD(rows, '#HDlist')
                    TTCTHD(rows, '#main-CTHD')
                    CNTTHD(rows, '#main-CTHD')
                    vam('.load-wrap').setAttribute('style', 'display:none')
                    rows.forEach((t) => {
                        vam('.thttKH_ttKH_Tong>p')
                    })
                });
        });
    // load dữ liệu hóa đơn
};

/* Mở rộng các chức năng của từng khách hàng */

DataName((dataname) => {
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    // xóa dấu 
    function search() {
        const searchValue = removeAccents(vam("#search").value.toLowerCase());
        // Lọc dữ liệu
        const filteredData = dataname.filter(item => removeAccents(item.toLowerCase()).includes(searchValue));
        vams(`.wrap-items .items`).forEach((t) => {
            t.setAttribute('style', 'display:none')
        })
        filteredData.forEach(item => {
            vams(`.wrap-items .items[dataName="${item}"]`).forEach((t) => {
                t.setAttribute('style', 'display:flex')
            })
        });
    }
    vam('#search').addEventListener('input', search)
})
function More() {
    vams('.more').forEach((more) => {
        more.addEventListener('click', () => {
            // Gọi tên biến 
            let morei = more.getAttribute("index")
            let name = vam(`.name-KH[index="${morei}"]`).innerText;
            let loai = vam(`.LoaiKH[index="${morei}"]`).innerText
            let diachi = vam(`.items-wrap[index="${morei}"] .adress-KH`).innerText;
            let ttsd = vam(`.ttsd[index="${morei}"]`).innerText;
            let idkh = vam(`.IDKH[index="${morei}"]`).innerText

            // Hiển thị box more
            vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:flex')
            vam('.bg-more').setAttribute('style', 'display:block')
            // Tắt box more
            vam('.bg-more').addEventListener('click', () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
            })
            /* Chọn chức năng xóa khách hàng */
            Delete(morei)
            /* Chọn chức năng thông tin chi tiết khách hàng */
            vam(`.more-detail[index='${morei}']>.detail-box`).onclick = () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.detail-main').setAttribute('style', 'transform: translateX(0)')
                vam('.addKH-title h1').innerText = name
                vam(`.ttct[index='${morei}']`).setAttribute('style', 'display:block')
                vam('.nav-con-items.acc').classList.remove('acc')
                vam('.ttctnav').classList.add('acc')
                nav(morei, idkh, name, diachi, loai)
            };
            /* Chọn chức năng cập nhập thông tin */
            vam(`.more-detail[index='${morei}']>.updated`).onclick = () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.detail-main').setAttribute('style', 'transform: translateX(0)')
                vam(`.cntt[index='${morei}']`).setAttribute('style', 'display:block')
                vam(`.ttct[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.addKH-title h1').innerText = name
                vam('.nav-con-items.acc').classList.remove('acc')
                vam('.ttctnav').classList.add('acc')
                nav(morei, idkh, name, diachi, loai)
            };

            /* Chọn chức năng tình hình tiêu thụ */
            vam(`.more-detail[index='${morei}'] .thtt`).onclick = () => {
                vam(`.thttKH`).setAttribute('style', 'display:block')
                vam('.thttKH_ttKH_name>p').innerText = name
                vam('.thttKH_ttKH_adress>p').innerText = diachi
                vam('.thttKH_ttKH_ttsd>p').innerText = ttsd
                vams(`.thttKH_items`).forEach((tab) => {
                    tab.setAttribute('style', 'display:none')
                })
                vams('.thttIDBD').forEach((tab) => {
                    let hoadonr = tab.getAttribute('index')
                    if (tab.innerText == idkh) {
                        vam(`.thttKH_items[index="${hoadonr}"]`).setAttribute('style', 'display:flex')
                    }
                })
                let tien = 0
                vams(`.thttKH_items[style="display:flex"]`).forEach((t) => {
                    let g = t.getAttribute('index')
                    let f = vam(`.thttKH_items[index="${g}"] .tinhtranghd`).innerText

                    if (f == 'CÒN NỢ') {
                        tien = tien + Number(vam(`.thttKH_items[index="${g}"] .t`).getAttribute('id'));

                    }
                })
                vam('.thttKH_ttKH_Tong>p').innerText = parseFloat(tien).toLocaleString("vi-VN") + ' vnđ'
                vam(`.tongtin`)
                vam('#clost-thttKH').addEventListener('click', () => {
                    vam(`.thttKH`).setAttribute('style', 'display:none')
                    vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                    vam('.bg-more').setAttribute('style', 'display:none')
                })

            };
            /* Chọn chức năng thêm hóa đơn */
            vam(`.more-detail[index='${morei}'] .createHD`).onclick = () => {
                vam('.detail-main').setAttribute('style', 'transform: translateX(0)')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility: visible');
                vam('.addHD').setAttribute('style', 'display:block')
                vam('.addKH-title h1').innerText = name
                vam(`.hd[index='${morei}']`).setAttribute('style', 'display:flex')
                vams(`.items-HD`).forEach((tab) => {
                    tab.setAttribute('style', 'display:none')
                })
                vams(`.hd[index='${morei}'] .IDBD`).forEach((tab) => {
                    let hoadonr = tab.getAttribute('index')
                    if (tab.innerText == idkh) {
                        vam(`.hd[index='${morei}'] .items-HD[index="${hoadonr}"]`).setAttribute('style', 'display:flex')
                    }
                })
                vam('.nav-con-items.acc').classList.remove('acc')
                vam('.thdnav').classList.add('acc')
                vam("#getaddHD").onclick = () => {
                    addHD(idkh, name, diachi, loai)
                };
                if (vams(`.items-HD[style="display:flex"]`).length > 0) {
                    morehoadon(morei, idkh, name, diachi, loai)
                }
                nav(morei, idkh, name, diachi, loai)
            };

            vam('.clostaddHD').addEventListener('click', () => {
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility: hidden');
                vam('.addHD').setAttribute('style', 'display:none')
            });

            vam("#getaddHD").onclick = () => {
                addHD(idkh, name, diachi, loai)
            };
            /* Chọn chức năng xem hóa đơn */
            vam(`.more-detail[index='${morei}'] .xhd`).onclick = () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.detail-main').setAttribute('style', 'transform: translateX(0)')
                vam('.addKH-title h1').innerText = name
                vam(`.hd[index='${morei}']`).setAttribute('style', 'display:flex')
                vams(`.items-HD`).forEach((tab) => {
                    tab.setAttribute('style', 'display:none')
                })
                vams(`.hd[index='${morei}'] .IDBD`).forEach((tab) => {
                    let hoadonr = tab.getAttribute('index')
                    if (tab.innerText == idkh) {
                        vam(`.hd[index='${morei}'] .items-HD[index="${hoadonr}"]`).setAttribute('style', 'display:flex')
                    }
                })
                vam('.nav-con-items.acc').classList.remove('acc')
                vam('.thdnav').classList.add('acc')
                if (vams(`.items-HD[style="display:flex"]`).length > 0) {
                    morehoadon(morei, idkh, name, diachi, loai)
                }
                nav(morei, idkh, name, diachi, loai)
            };


            vam('.bg-more-dark-hd').addEventListener('click', () => {
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility: hidden');
                vam('.addHD').setAttribute('style', 'display:none')
            })

            if (vam(`.additems-hd[index="${morei}"]`) != null) {
                vam(`.additems-hd[index="${morei}"]`).onclick = () => {
                    vam('.bg-more-dark-hd').setAttribute('style', 'visibility: visible');
                    vam('.addHD').setAttribute('style', 'display:block')
                    vam("#getaddHD").onclick = () => {
                        addHD(idkh, name, diachi, loai)
                    };
                };
            }

            /* Tắt box các thông tin */
            vam(`#clost-detail`).onclick = () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
                vam('.detail-main').setAttribute('style', 'transform: translateX(100%)')
                vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
                vam('.addHD').setAttribute('style', 'display:none')
                if (vam(`.cntt[style='display:block']`) != null) {
                    vam(`.cntt[style='display:block']`).setAttribute('style', 'display:none')
                }
                if (vam(`.ttct[style='display:block']`) != null) {
                    vam(`.ttct[style='display:block']`).setAttribute('style', 'display:none')
                }
                vam(`.hd[index='${morei}']`).setAttribute('style', 'display:none')
                vam(`.hd[index="${morei}"] .more-detail-HD[index='${morei}']`).setAttribute('style', 'display:none')
                vams('.bg-more-con[style="display:block"]').forEach((t) => t.setAttribute('style', 'display:none'))
            }
            vam('.bg-more-dark').onclick = () => {
                vam(`.more-detail[index='${morei}']`).setAttribute('style', 'display:none')
                vam('.bg-more').setAttribute('style', 'display:none')
                vam('.detail-main').setAttribute('style', 'transform: translateX(100%)')
                vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
                vam('.addHD').setAttribute('style', 'display:none')
                if (vam(`.cntt[style='display:block']`) != null) {
                    vam(`.cntt[style='display:block']`).setAttribute('style', 'display:none')
                }
                if (vam(`.ttct[style='display:block']`) != null) {
                    vam(`.ttct[style='display:block']`).setAttribute('style', 'display:none')
                }
                vam(`.hd[index='${morei}']`).setAttribute('style', 'display:none')
                if (vam(`.more-detail-HD[style="display:flex"]`) != null) {
                    vam(`.more-detail-HD[style="display:flex"]`).setAttribute('style', 'display:none')
                }
                vams(`.more-detail-HD`).forEach((t) => t.setAttribute('style', 'display:none'))
                vams('.bg-more-con[style="display:block"]').forEach((t) => t.setAttribute('style', 'display:none'))
            }
        })
    })
}

/* navber in box detail */
function nav(Index, idkh, name, diachi, loai) {
    vam('.ttctnav').addEventListener('click', () => {
        vams('.ttct').forEach((tab) => {
            tab.setAttribute('style', 'display:none')
        })
        vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:block')
        vam(`.hd[index='${Index}']`).setAttribute('style', 'display:none')
        vam('.nav-con-items.acc').classList.remove('acc')
        vam('.ttctnav').classList.add('acc')
    });
    if (vam(`.ttct[index='${Index}'] .ttct-title>div`) != null) {
        vam(`.ttct[index='${Index}'] .ttct-title>div`).addEventListener('click', () => {
            vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:none')
            vam(`.cntt[index='${Index}']`).setAttribute('style', 'display:block')
            CNTTKH()
        })
    }
    CNTTKH()
    function CNTTKH() {
        let t = []
        vams(`.cntt[index='${Index}'] .input-ups`).forEach((tab) => {
            t = t.concat(tab.value)
        })
        // Trường hợp hủy lưu
        vam(`.cntt[index='${Index}'] .cancel`).addEventListener('click', () => {
            let c = [];
            vams(`.cntt[index='${Index}'] .input-ups`).forEach((tab) => {
                c = c.concat(tab.value)
            })
            let ss = true
            for (var i = 0; i < t.length; i++) {
                if (t[i] !== c[i]) {
                    ss = false
                }
            }
            if (ss) {
                vam(`.cntt[index='${Index}']`).setAttribute('style', 'display:none')
                vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:block')
            }
            else {
                vam('#thongbao').innerHTML = thongbaocapnhap;
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility:visible')
                vam('#huycapnhap').addEventListener('click', () => {
                    Outcn()
                    vam(`.cntt[index='${Index}']`).setAttribute('style', 'display:none')
                    vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:block')
                    ResetdataUDKH(t, Index)
                })
                vam('.closttb').addEventListener('click', () => Outcn())
                vam('.bg-more-dark-hd').addEventListener('click', () => Outcn())
                vam('#capnhap').addEventListener('click', () => {
                    vam('.thongbaocapnhap').remove();
                    vam(`.cntt[index='${Index}']`).setAttribute('style', 'display:none')
                    vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:block')
                    UpdatettKH(index, Index)
                })
            }
        })
        // Trường hợp thoát 
        function Outcntt() {
            let c = [];
            vams(`.cntt[index='${Index}'] .input-ups`).forEach((tab) => {
                c = c.concat(tab.value)
            })
            let ss = true
            for (var i = 0; i < t.length; i++) {
                if (t[i] !== c[i]) {
                    ss = false
                }
            }
            if (ss) { }
            else {
                vam('#thongbao').innerHTML = thongbaocapnhap;
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility:visible')
                vam('#huycapnhap').addEventListener('click', () => {
                    Outcn()
                    ResetdataUDKH(t, Index)
                })
                vam('.closttb').addEventListener('click', () => {
                    Outcn()
                    ResetdataUDKH(t, Index)
                })
                vam('.bg-more-dark-hd').addEventListener('click', () => {
                    Outcn()
                    ResetdataUDKH(t, Index)
                })
                vam('#capnhap').addEventListener('click', () => {
                    vam('.thongbaocapnhap').remove();
                    UpdatettKH(index, Index)
                })
            }
        }
        vam(`#clost-detail`).addEventListener('click', () => {
            Outcntt()
        })
        vam(`.bg-more-dark`).addEventListener('click', () => {
            Outcntt()
        })
        // Hàm tắt thông báo
        function Outcn() {
            if (vam('.thongbaocapnhap') != null) {
                vam('.thongbaocapnhap').remove();
            }
            vam('.bg-more-dark-hd').setAttribute('style', 'visibility:hidden')
        }
        // Hàm reset giá trị khi hủy cập nhập
        function ResetdataUDKH(aray, Index) {
            let i = 0
            vams(`.cntt[index='${Index}'] .input-ups`).forEach((tab) => {
                tab.value = aray[i]
                i++
            })
        }
    }
    vam('.thdnav').addEventListener('click', () => {
        vams('.hd').forEach((tab) => {
            tab.setAttribute('style', 'display:none')
        })
        vam(`.hd[index='${Index}']`).setAttribute('style', 'display:flex')
        vam(`.cntt[index='${Index}']`).setAttribute('style', 'display:none')
        vam(`.ttct[index='${Index}']`).setAttribute('style', 'display:none')
        vam('.nav-con-items.acc').classList.remove('acc')
        vam('.thdnav').classList.add('acc')
        vams(`.items-HD`).forEach((tab) => {
            tab.setAttribute('style', 'display:none')
        })
        vams(`.hd[index='${Index}'] .IDBD`).forEach((tab) => {
            let hoadonr = tab.getAttribute('index')
            if (tab.innerText == idkh) {
                vam(`.hd[index='${Index}'] .items-HD[index="${hoadonr}"]`).setAttribute('style', 'display:flex')
            }
        })
        if (vam(`.additems-hd[index="${Index}"]`) != null) {
            vam(`.additems-hd[index="${Index}"]`).addEventListener('click', () => {
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility: visible');
                vam('.addHD').setAttribute('style', 'display:block')
                vam("#getaddHD").onclick = () => {
                    addHD(idkh, name, diachi, loai)
                };
            });
        }
        if (vams(`.items-HD[style="display:flex"]`).length > 0) {
            morehoadon(Index, idkh, name, diachi, loai)
        }
    });
}



// Xóa khách hàng 
function Delete(Index) {
    $(document).ready(function () {
        vams(".clearKH").forEach((clear) => {
            clear.addEventListener('click', () => {
                vam('#thongbao').innerHTML = thongbaoxoa;
                vam('.bg-more-dark-hd').setAttribute('style', 'visibility:visible')
                vam('.bg-more-dark-hd').addEventListener('click', () => {
                    vam('.thongbaoxoa').remove();
                    vam('.bg-more').setAttribute('style', 'display:none')
                    vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                    vam('.bg-more-dark-hd').setAttribute('style', 'visibility:hidden')
                })
                vam('.closttb').addEventListener('click', () => {
                    vam('.thongbaoxoa').remove();
                    vam('.bg-more').setAttribute('style', 'display:none')
                    vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                    vam('.bg-more-dark-hd').setAttribute('style', 'visibility:hidden')
                })
                vam('#huyxoa').addEventListener('click', () => {
                    vam('.thongbaoxoa').remove();
                    vam('.bg-more').setAttribute('style', 'display:none')
                    vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                    vam('.bg-more-dark-hd').setAttribute('style', 'visibility:hidden')
                })
                vam('#tieptucxoa').addEventListener('click', () => {
                    vam('.thongbaoxoa').remove();
                    vam('.load-wrap').setAttribute('style', 'dislay:flex')
                    var indexclear = clear.getAttribute('index')
                    $.ajax({
                        type: "GET",
                        url: URL + "?" + "index=" + indexclear + "&action=xoa-data",
                        success: function (response) {
                            location.reload()
                        },
                        error: function (error) {
                        },
                    });
                })
            })
        })
    });
}

// Thêm khách hàng 

vam("#getadd").addEventListener('click', () => {
    AddKH(index)
})

function AddKH(Children) {
    var inputValues = $(".input-adds")
        .map(function () {
            var input = $(this);
            return input.attr("name") + "=" + "'" + encodeURIComponent(input.val());
        })
        .get();
    // tạo 
    var queryString = inputValues.join("&");
    var sonaylasodacbiet = 0
    vams(".input-adds").forEach((tab) => {
        if (tab.value != "") { }
        else if (tab.value == "") {
            sonaylasodacbiet = sonaylasodacbiet + 1
        }
    })
    if (sonaylasodacbiet == 0) {
        vam('.load-wrap').setAttribute('style', 'dislay:flex')
        $.ajax({
            type: "GET",
            url: URL + "?" + "index=" + Children + "&" + queryString + "&action=them-data",
            success: function (response) {
                location.reload()
            },
            error: function (error) {
            },
        });
    }
    else if (sonaylasodacbiet != 0) {
        alert('Vui lòng điền đầy đủ thông tin khách hàng')
    }
}

// Cập nhập thông tin khách hàng 
function BTUpdatettKH() {
    vams(".buttonup").forEach((tab) => {
        tab.addEventListener('click', () => {
            var indexup = tab.getAttribute('index')
            UpdatettKH(index, indexup)
        })
    })
}
function UpdatettKH(index, indexup) {
    var inputValue = $(`.cntt[index='${indexup}'] .input-ups`)
        .map(function () {
            var inputd = $(this);
            return inputd.attr("name") + "=" + "'" + encodeURIComponent(inputd.val());
        })
        .get();
    var queryStrin = inputValue.join("&");
    let sonaylasodac = 0
    vams(`.cntt[index='${indexup}'] .input-ups`).forEach((tab) => {
        if (tab.value != "") { }
        else if (tab.value == "") {
            sonaylasodac = sonaylasodac + 1
        }
    })
    if (sonaylasodac == 0) {
        vam('.load-wrap').setAttribute('style', 'display:flex')
        $.ajax({
            type: "GET",
            url: URL + "?" + "i=" + indexup + "&index=" + index + "&" + queryStrin + "&action=sua-data",
            success: function (response) {
                location.reload()
            },
            error: function (error) {
            },
        });
    }
    else if (sonaylasodac != 0) {
        alert('Vui lòng không để trống thông tin khi chỉnh sửa')
    }
}
/* Thêm hóa đơn */
function addHD(id, name, address, loai) {
    ThongTinHD('.addHD[style="display:block"]', id, name, address, loai, 'add', 0)
    var inputValu = $(".input-addsHD")
        .map(function () {
            var inputdd = $(this);
            return inputdd.attr("name") + "=" + encodeURIComponent(inputdd.val());
        })
        .get();
    var queryStri = inputValu.join("&");
    let x = vam(`.addHD[style="display:block"] input[name="NameNH"]`).getAttribute('value');
    let sonaylasodac = 0
    vams(`.input-addsHD`).forEach((tab) => {
        if (tab.value != "") { }
        else if (tab.value == "") {
            sonaylasodac = sonaylasodac + 1;
        }
    })
    if (x >= 0) {
        vam('.load-wrap').setAttribute('style', 'dislay:flex')
        $.ajax({
            type: "GET",
            url: URL + "?" + queryStri + "&action=add-dataHD",
            success: function (response) {
                location.reload()
            },
            error: function (error) {
            },
        });
    }
    else if (x < 0) {
        alert('chỉ số mới không được thấp hơn chỉ số cũ');
    }/* 
    else if (sonaylasodac != 0) {
        alert('Vui lòng không để trống thông tin')
    }*/
}
/* Bộ chọn chức năng cho hóa đơn */
function morehoadon(Index, idkh, name, diachi, loai) {
    vams(`.hd[index="${Index}"] .more-HD-con`).forEach((tab) => {
        tab.addEventListener('click', () => {
            let morehd = tab.getAttribute("index")
            /* mở chọn chức năng */
            vam(`.hd[index="${Index}"] .more-detail-HD[index='${morehd}']`).setAttribute('style', 'display:flex')
            vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:block')
            /* thông tin chi tiết hóa đơn */
            vam(`.hd[index="${Index}"] .more-detail-HD[index='${morehd}'] .detail-hoadon`).onclick = () => {
                vam('.wrapHD').setAttribute('style', 'display:block')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.wrapHD h1').innerHTML = 'CHI TIẾT HÓA ĐƠN'
                vams(`.ttctHD`).forEach((t) => t.setAttribute('style', 'display:none'))
                vams(`.cnttHD`).forEach((t) => t.setAttribute('style', 'display:none'))
                vam(`.ttctHD[index="${morehd}"]`).setAttribute('style', 'display:block')
            }
            /* cập nhập thông tin hóa đơn */
            vam(`.hd[index="${Index}"] .more-detail-HD[index='${morehd}'] .update-hoadon`).onclick = () => {
                vam('.wrapHD').setAttribute('style', 'display:block')
                vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                vam('.wrapHD h1').innerHTML = 'CHỈNH SỬA HÓA ĐƠN'
                vams(`.ttctHD`).forEach((t) => t.setAttribute('style', 'display:none'))
                vams(`.cnttHD`).forEach((t) => t.setAttribute('style', 'display:none'))
                vam(`.cnttHD[index="${morehd}"]`).setAttribute('style', 'display:block')
                vam(`.cnttHD[index="${morehd}"] .cancel-HD`).addEventListener('click', () => {
                    vam('.bg-more-con').setAttribute('style', 'display:none')
                    vam('.wrapHD').setAttribute('style', 'display:none')
                });
                $(document).ready(function () {
                    vams(".buttonup-HD").forEach((tab) => {
                        tab.addEventListener('click', () => {
                            var indexud = tab.getAttribute('index')
                            ThongTinHD(`.cnttHD[index="${indexud}"]`, idkh, name, diachi, loai, 'update', morehd)
                            let x = vam(`.cnttHD[index="${morehd}"] input[name="NameNH"]`).getAttribute('value');
                            /*vam(`.cnttHD[index="${morehd}"] input[name="Nb"]`).setAttribute('value', `${today.getFullYear()}`)
                            vam(`.cnttHD[index="${morehd}"] input[name="lNT"]`).setAttribute('value', `${today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}`);
                            let c = vam(`.cnttHD[index="${morehd}"] input[name="STK"]`).value;
                            let m = vam(`.cnttHD[index="${morehd}"] input[name="DB"]`).value;
                            vam(`.cnttHD[index="${morehd}"] input[name="NameNH"]`).setAttribute('value', Number(c) - Number(m));
                            let x = vam(`.cnttHD[index="${morehd}"] input[name="NameNH"]`).getAttribute('value');
                             thông tin cập nhập 
                            if (0 <= x && x <= 4) {
                                let t = x * 5800
                                vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', 5800);
                                vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                var word = to_vietnamese(number);
                                vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (4 < x && x <= 10) {
                                let y = x - 4
                                let t = 4 * 5800 + y * 9500
                                vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', `4 + ${y}`);
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', '5800, 9500');
                                vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + y * 9500);
                                vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                var word = to_vietnamese(number);
                                vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (10 < x && x <= 20) {
                                let y = x - 10
                                let t = 4 * 5800 + 10 * 9500 + y * 12800
                                vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', `4 + 10 + ${y}`);
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', '5800, 9500, 12800');
                                vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + y * 12800);
                                vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                var word = to_vietnamese(number);
                                vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (20 < x && x <= 30) {
                                let y = x - 20
                                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + y * 15000
                                vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', `4 + 10 + 10 + ${y}`);
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', '5800, 9500, 12800,15000');
                                vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + y * 15000);
                                vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                var word = to_vietnamese(number);
                                vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (x > 30) {
                                let y = x - 30
                                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + 10 * 15000 + y * 18500
                                vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', `4 + 10 + 10 + 10 + ${y}`);
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', '5800, 9500, 12800, 15000, 18500');
                                vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + 10 * 15000 + '+' + y * 18500);
                                vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                var word = to_vietnamese(number);
                                vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            if (loai == 'Loại 1') {
                                vam(`.cnttHD[index="${morehd}"] input[name="lDH"]`).setAttribute('value', 5800);
                                if (0 <= x && x <= 4) {
                                    let t = x * 5800
                                    vam(`.cnttHD[index="${morehd}"] input[name="MsT"]`).setAttribute('value', x);
                                    vam(`.cnttHD[index="${morehd}"] input[name="kDH"]`).setAttribute('value', t);
                                    vam(`.cnttHD[index="${morehd}"] input[name="mDH"]`).setAttribute('value', t);
                                    vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                    var number = vam(`.cnttHD[index="${morehd}"] input[name="sH"]`).getAttribute('value')
                                    let word = to_vietnamese(number);
                                    vam(`.cnttHD[index="${morehd}"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                    vam(`.cnttHD[index="${morehd}"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                    vam(`.cnttHD[index="${morehd}"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                                }
                                else if (4 < x && x <= 10) {
                                    let y = x - 4
                                    let t = 4 * 5800 + y * 9500
                                    vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', `4 + ${y}`);
                                    vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + y * 9500);
                                    vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                    vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                    var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                    let word = to_vietnamese(number);
                                    vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                    vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                    vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                                }
                                else if (10 < x && x <= 20) {
                                    let y = x - 10
                                    let t = 4 * 5800 + 10 * 9500 + y * 12800
                                    vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', `4 + 10 + ${y}`);
                                    vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + y * 12800);
                                    vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                    vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                    var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                    let word = to_vietnamese(number);
                                    vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                    vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                    vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                                }
                                else if (20 < x && x <= 30) {
                                    let y = x - 20
                                    let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + y * 15000
                                    vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', `4 + 10 + 10 + ${y}`);
                                    vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + y * 15000);
                                    vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                    vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                    var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                    let word = to_vietnamese(number);
                                    vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                    vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                    vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                                }
                                else if (x > 30) {
                                    let y = x - 30
                                    let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + 10 * 15000 + y * 18500
                                    vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', `4 + 10 +  10 + 10 + ${y}`);
                                    vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + 10 * 15000 + '+' + y * 18500);
                                    vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                    vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                    var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                    let word = to_vietnamese(number);
                                    vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                    vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                    vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                                }
                            }
                            else if (loai == 'Loại 2') {
                                let t = x * 9500
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 9500);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 3') {
                                let t = x * 12500
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 12500);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 4') {
                                let t = x * 12800
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 12800);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 5') {
                                let t = x * 14500
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 14500);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 6') {
                                let t = x * 15000
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 15000);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 7') {
                                let t = x * 18500
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 18500);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }
                            else if (loai == 'Loại 8') {
                                let t = x * 22000
                                vam(`.addHD[style="display:block"] input[name="MsT"]`).setAttribute('value', x);
                                vam(`.addHD[style="display:block"] input[name="lDH"]`).setAttribute('value', 22000);
                                vam(`.addHD[style="display:block"] input[name="kDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="mDH"]`).setAttribute('value', t);
                                vam(`.addHD[style="display:block"] input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                                var number = vam(`.addHD[style="display:block"] input[name="sH"]`).getAttribute('value')
                                let word = to_vietnamese(number);
                                vam(`.addHD[style="display:block"] input[name="lHT"]`).setAttribute('value', word + ' đồng');
                                vam(`.addHD[style="display:block"] input[name="pay"]`).setAttribute('value', t / 100 * 5);
                                vam(`.addHD[style="display:block"] input[name="loai"]`).setAttribute('value', t / 100 * 10);
                            }*/


                            var inputValuec = $(`.cnttHD[index='${morehd}'] .input-cnttHD`)
                                .map(function () {
                                    var inputdc = $(this);
                                    return inputdc.attr("name") + "=" + encodeURIComponent(inputdc.val());
                                })
                                .get();
                            var queryStrinr = inputValuec.join("&");
                            let sonaylasodac = 0
                            vams(`.cnttHD[index='${morehd}'] .input-cnttHD`).forEach((tab) => {
                                if (tab.value != "") { }
                                else if (tab.value == "") {
                                    sonaylasodac = sonaylasodac + 1;
                                }
                            })
                            if (x >= 0) {
                                vam('.load-wrap').setAttribute('style', 'dislay:flex')
                                $.ajax({
                                    type: "GET",
                                    url: URL + "?" + "i=" + morehd + "&index=" + index + "&" + queryStrinr + "&action=sua-dataHD",
                                    success: function (response) {
                                        location.reload()
                                    },
                                    error: function (error) {
                                    },
                                });
                            }
                            else if (x < 0) {
                                alert('chỉ số mới không được thấp hơn chỉ số cũ');
                            }
                        });
                    })
                });
            }
            if (vam('.wrapHD').getAttribute('style') == 'display:block') {
                vam(`.hd[index='${Index}'] .more-detail-HD[index='${morehd}']`).setAttribute('style', 'display:none')
                vam('#clost-detailHD').onclick = () => {
                    vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:none')
                    vam('.wrapHD').setAttribute('style', 'display:none')
                }
                vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).onclick = () => {
                    vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:none')
                    vam('.wrapHD').setAttribute('style', 'display:none')
                }
                vam('.bg-more-dark').onclick = () => {
                    vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:none')
                    vam('.wrapHD').setAttribute('style', 'display:none')
                    vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                    vam('.bg-more').setAttribute('style', 'display:none')
                    vam('.bg-more-dark').setAttribute('style', 'visibility: visible');
                    vam('.detail-main').setAttribute('style', 'transform: translateX(0)')
                    vam('.bg-more-dark').addEventListener('click', () => {
                        vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                        vam('.bg-more').setAttribute('style', 'display:none')
                        vam('.detail-main').setAttribute('style', 'transform: translateX(100%)')
                        vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
                        vam('.addHD').setAttribute('style', 'display:none')
                    })
                }
                if (vam('.wrapHD').getAttribute('style') == 'display:none') {
                    vam('.bg-more-dark').addEventListener('click', () => {
                        vam(`.more-detail[index='${Index}']`).setAttribute('style', 'display:none')
                        vam('.bg-more').setAttribute('style', 'display:none')
                        vam('.detail-main').setAttribute('style', 'transform: translateX(100%)')
                        vam('.bg-more-dark').setAttribute('style', 'visibility: hidden');
                        vam('.addHD').setAttribute('style', 'display:none')
                    })
                }
            }
            /* tắt chọn chức năng */
            vam('.bg-more-con[style="display:block"]').onclick = () => {
                vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .more-detail-HD`).setAttribute('style', 'display:none')
                vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:none')
                vam('.wrapHD').setAttribute('style', 'display:none')
                vam('.bg-more-dark').setAttribute('style', 'visibility:visible')
            }
            vam('.bg-more-dark').onclick = () => {
                vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .bg-more-con`).setAttribute('style', 'display:none')
                vam(`.hd[index="${Index}"] .items-HD[index="${morehd}"] .more-detail-HD`).setAttribute('style', 'display:none')
                vam('.wrapHD').setAttribute('style', 'display:none')
                vam('.bg-more-dark').setAttribute('style', 'visibility:visible')
            };
        });
    })
}



/* Giá trị hóa đơn */
function ThongTinHD(document, idkh, name, diachi, loai, trangthai, g) {

    let s = vams(`.items-HD[style="display:flex"]`).length + 1;

    if (trangthai == 'add') {
        vam(`${document} input[name="iddate"]`).setAttribute('value', `${idkh}`)
        vam(`${document} input[name="phone"]`).setAttribute('value', `${name}`)
        vam(`${document} input[name="Pt"]`).setAttribute('value', `${diachi}`)
        vam(`${document} input[name="lDH"]`).setAttribute('value', 'y')
        vam(`${document} input[name="Nb"]`).setAttribute('value', `${today.getFullYear()}`)
        vam(`${document} input[name="address"]`).setAttribute('value', `123`);
        vam(`${document} input[name="lNT"]`).setAttribute('value', `${today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}`);
        vam(`${document} input[name="T"]`).setAttribute('value', `${s}`);
        if (s <= 1) {
            vam(`${document} input[name="DB"]`).setAttribute('value', 0)
        }
        else {
            var r = 1
            vams(`.items-HD[style="display:flex"] .CSM`).forEach((tab) => {
                if (r == vams(`.items-HD[style="display:flex"]`).length) {
                    vam(`${document} input[name="DB"]`).setAttribute('value', tab.innerText)
                }
                r++
            })
        }
        vam(`${document} input[name="id"]`).setAttribute('value', generateUniqueString(7))
        vam(`${document} input[name="name"]`).setAttribute('value', generateUnique(7))
        let c = vam(`${document} input[name="STK"]`).value;
        let m = vam(`${document} input[name="DB"]`).value;
        vam(`${document} input[name="NameNH"]`).setAttribute('value', Number(c) - Number(m));
        let x = vam(`${document} input[name="NameNH"]`).getAttribute('value');

        if (loai == 'Loại 1') {
            vam(`${document} input[name="lDH"]`).setAttribute('value', 5800);
            if (0 <= x && x <= 4) {
                let t = x * 5800
                vam(`${document} input[name="MsT"]`).setAttribute('value', x);
                vam(`${document} input[name="kDH"]`).setAttribute('value', t);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (4 < x && x <= 10) {
                let y = x - 4
                let t = 4 * 5800 + y * 9500
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + y * 9500);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (10 < x && x <= 20) {
                let y = x - 10
                let t = 4 * 5800 + 10 * 9500 + y * 12800
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + y * 12800);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (20 < x && x <= 30) {
                let y = x - 20
                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + y * 15000
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + y * 15000);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (x > 30) {
                let y = x - 30
                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + 10 * 15000 + y * 18500
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 +  10 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + 10 * 15000 + '+' + y * 18500);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
        }
        else if (loai == 'Loại 2') {
            let t = x * 9500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 9500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 3') {
            let t = x * 12500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 12500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 4') {
            let t = x * 12800
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 12800);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 5') {
            let t = x * 14500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 14500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 6') {
            let t = x * 15000
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 15000);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 7') {
            let t = x * 18500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 18500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 8') {
            let t = x * 22000
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 22000);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
    }
    else if (trangthai == 'update') {
        vam(`${document}[index="${g}"] input[name="iddate"]`).setAttribute('value', `${idkh}`)
        vam(`${document}[index="${g}"] input[name="phone"]`).setAttribute('value', `${name}`)
        vam(`${document}[index="${g}"] input[name="Pt"]`).setAttribute('value', `${diachi}`)
        vam(`${document}[index="${g}"] input[name="lDH"]`).setAttribute('value', 'y')
        vam(`${document}[index="${g}"] input[name="Nb"]`).setAttribute('value', `${today.getFullYear()}`)
        vam(`${document}[index="${g}"] input[name="address"]`).setAttribute('value', `123`);
        vam(`${document}[index="${g}"] input[name="lNT"]`).setAttribute('value', `${today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}`);
        vam(`${document}[index="${g}"] input[name="T"]`).setAttribute('value', `${s - 1}`);
        /* if (s = 2) {
             vam(`.cnttHD[index="${g}"] input[name="DB"]`).setAttribute('value', 0)
         }
         else if (s > 2) {
             var r = 1
             console.log(vams(`.items-HD[style="display:flex"]`).length);
             vams(`.items-HD[style="display:flex"] .CSM`).forEach((tab) => {
                 if (r == vams(`.items-HD[style="display:flex"]`).length - 1) {
                     vam(`${document}[index="${g}"] input[name="DB"]`).setAttribute('value', tab.innerText)
                 }
                 r++
             })
         }*/
        vam(`${document} input[name="id"]`).setAttribute('value', generateUniqueString(7))
        vam(`${document} input[name="name"]`).setAttribute('value', generateUnique(7))
        let c = vam(`${document} input[name="STK"]`).value;
        let m = vam(`${document} input[name="DB"]`).value;
        vam(`${document} input[name="NameNH"]`).setAttribute('value', Number(c) - Number(m));
        let x = vam(`${document} input[name="NameNH"]`).getAttribute('value');

        if (loai == 'Loại 1') {
            vam(`${document} input[name="lDH"]`).setAttribute('value', 5800);
            if (0 <= x && x <= 4) {
                let t = x * 5800
                vam(`${document} input[name="MsT"]`).setAttribute('value', x);
                vam(`${document} input[name="kDH"]`).setAttribute('value', t);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (4 < x && x <= 10) {
                let y = x - 4
                let t = 4 * 5800 + y * 9500
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + y * 9500);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (10 < x && x <= 20) {
                let y = x - 10
                let t = 4 * 5800 + 10 * 9500 + y * 12800
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + y * 12800);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (20 < x && x <= 30) {
                let y = x - 20
                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + y * 15000
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + y * 15000);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
            else if (x > 30) {
                let y = x - 30
                let t = 4 * 5800 + 10 * 9500 + 10 * 12800 + 10 * 15000 + y * 18500
                vam(`${document} input[name="MsT"]`).setAttribute('value', `4 + 10 +  10 + 10 + ${y}`);
                vam(`${document} input[name="kDH"]`).setAttribute('value', 4 * 5800 + '+' + 10 * 9500 + '+' + 10 * 12800 + '+' + 10 * 15000 + '+' + y * 18500);
                vam(`${document} input[name="mDH"]`).setAttribute('value', t);
                vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
                var number = vam(`${document} input[name="sH"]`).getAttribute('value')
                let word = to_vietnamese(number);
                vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
                vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
                vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
            }
        }
        else if (loai == 'Loại 2') {
            let t = x * 9500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 9500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 3') {
            let t = x * 12500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 12500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 4') {
            let t = x * 12800
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 12800);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 5') {
            let t = x * 14500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 14500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 6') {
            let t = x * 15000
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 15000);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 7') {
            let t = x * 18500
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 18500);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
        else if (loai == 'Loại 8') {
            let t = x * 22000
            vam(`${document} input[name="MsT"]`).setAttribute('value', x);
            vam(`${document} input[name="lDH"]`).setAttribute('value', 22000);
            vam(`${document} input[name="kDH"]`).setAttribute('value', t);
            vam(`${document} input[name="mDH"]`).setAttribute('value', t);
            vam(`${document} input[name="sH"]`).setAttribute('value', t + t / 100 * 10 + t / 100 * 5);
            var number = vam(`${document} input[name="sH"]`).getAttribute('value')
            let word = to_vietnamese(number);
            vam(`${document} input[name="lHT"]`).setAttribute('value', word + ' đồng');
            vam(`${document} input[name="pay"]`).setAttribute('value', t / 100 * 5);
            vam(`${document} input[name="loai"]`).setAttribute('value', t / 100 * 10);
        }
    }

}
