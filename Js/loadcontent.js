// Chi tiết hóa đơn 
function ChiTietHD(Children, document) {
    let Items = ''
    let i = 2
    Children.forEach((row) => {
        Items += `
            <div class="thttKH_items" style="display:none" index=${i}>
            <p style="display:none" class="thttIDBD" index=${i}>${row['ID Khách Hàng']}</p>
                <p class="kyhd">${row['Kỳ Thanh Toán']}</p>
                <p class="sh">so ho</p>
                <p class="ngt">ng. trọ</p>
                <p class="gia">giá</p>
                <p class="csc">${row['Chỉ Số Cũ']}</p>
                <p class="csm">${row['Chỉ Số Mới']}</p>
                <p class="kltt">${row['Khối Lượng Tiêu Thụ']}</p>
                <p class="tn">${row['Tiền Nước Trước Thuế']}</p>
                <p class="tt">${row['Thuế GTGT']}</p>
                <p class="tp">${row['Phí Môi Trường']}</p>
                <p class="tg">0</p>
                <p class="t">${row['Tổng Thanh Toán Sau Thuế GTGT']}</p>
                <p class="tn">${row['Tình trạng']}</p>
                <p class="lt"></p>
                <p class="nv">nhân viên</p>
                <p class="ttsd">Mở</p>
                <p class="nt">${row['Ngày Lập Hoá Đơn']}</p>
            </div>
            `;
    })
    vam(`${document}`).innerHTML = Items
}
// 
function TTCTHD(Children, document) {
    let Items = ''
    let i = 2
    Children.forEach((row) => {
        let v = parseFloat(row['Tổng Thanh Toán Sau Thuế GTGT']).toLocaleString("vi-VN")
        Items +=
            `<div class="ttctHD" index=${i} style="display:none">
                <form id="formttct">
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Họ và tên:</p>
                            <p class="ttct-text">${row['Tên Khách Hàng']}</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Chỉ Số Trước:</p>
                            <p class="ttct-text" >${row['Chỉ Số Cũ']}</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Chỉ Số Sau:</p>
                            <p class="ttct-text">${row['Chỉ Số Mới']}</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Mức Tiêu Thụ:</p>
                            <p class="ttct-text" >${row['Khối Lượng Tiêu Thụ']}</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Tình Trạng Hóa Đơn:</p>
                            <p class="ttct-text">${row['Tình trạng']}</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Tổng thu:</p>
                            <p class="ttct-text">${v} đ</p>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Người Lập:</p>
                            <p class="ttct-text" >${row['Người Lập']}</p>
                        </div>
                        <div class="input-add-wrap">
                            <p>Ngày Lập:</p>
                            <p class="ttct-text">${date}</p>
                        </div>
                    </div>
                </form>
            </div>`
        i++
    })
    vam(`${document}`).innerHTML += Items
}
// Hóa đơn 
function HDWrap(Children, document) {
    let Items = ''
    let i = 2
    Children.forEach((row) => {
        Items +=
            `<div class="hd" index=${i} style="display:none">
                <div class="nav-i-lg-con">
                    <div class="additems-hd" index=${i}>
                        <div class="text">
                            <i class="bi bi-clipboard-plus"></i>
                        </div>
                        <h1 class="addclick-hd">Thêm hóa đơn</h1>
                    </div>
                    <div class="search-wrap-con">
                        <input class="search-KH" type="search" placeholder="Lọc và tìm kiếm">
                            <i class="bi bi-search"></i>
                    </div>
                </div>
                <div style="flex: 1; overflow-y: scroll;">
                    <div id="HDlist"></div>
                </div>
            </div>`
        i++
    })
    vam(`${document}`).innerHTML += Items
}

function HD(Children, document) {
    let Items = '';
    let RowHD = `<div class="row-title">
    <h1 style="flex:4">Thời gian tạo</h1>
    <h1 style="flex:4">Tổng tiền cần thanh toán</h1>
    <h1 style="flex:4">Tình trạng hóa đơn</h1>
    <h1 style="flex:1"></h1></div>`
    let i = 2
    Children.forEach((row) => {
        let v = parseFloat(row['Tổng Thanh Toán Sau Thuế GTGT']).toLocaleString("vi-VN")
        if (wid > 982) {
            Items +=
                `<div class="items-HD" style="display:none" index=${i}>
                    <div class="items-wrap">
                        <p style="display:none" class="IDBD" index=${i}>${row['ID Khách Hàng']}</p>
                        <p style="display:none" class="CSM" index=${i}>${row['Chỉ Số Mới']}</p>
                        <h4 style="flex:4">${row['Ngày Lập Hoá Đơn']}</h4>
                        <h4 style="flex:4">${v} đ</h4>
                        <h4 style="flex:4">${row['Tình trạng']}</h4>
                        <div style="flex:1;display:flex;justify-content:end;align-items:center">
                            <div class='bg-more-con' style="display: none"></div>
                            <div class="more-HD-con" index=${i}>
                                <i class="bi bi-three-dots-vertical"></i>
                                <div class='more-detail-HD' style="display:none" index=${i}>
                                    <a class="button detail-hoadon"><i class="bi bi-info-circle"></i><p>Chi tiết hóa đơn</p></a>
                                    <a class="button update-hoadon"><i class="bi bi-pen"></i><p>Sửa hóa đơn</p></a>
                                    <a class="button updated"><i class="bi bi-file-earmark-plus"></i><p>Xuất hóa đơn</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        }
        else {
            Items +=
                `<div class="items-HD" style="display:none" index=${i}>
                    <div class="items-wrap">
                        <p style="display:none" class="IDBD" index=${i}>${row['ID Khách Hàng']}</p>
                        <p style="display:none" class="CSM" index=${i}>${row['Chỉ Số Mới']}</p>
                        <div style="flex:1;display:flex; flex-direction: column;gap:5px">
                            <h4 >Thời gian tạo: ${date}</h4>
                            <h4 >Tổng tiền: ${v} đ</h4>
                            <h4 >Tình trạng: ${row['Tình trạng']}</h4>
                        </div>
                        <div style="display:flex;justify-content:end;align-items:center">
                            <div class='bg-more-con' style="display: none"></div>
                            <div class="more-HD-con" index=${i}>
                                <i class="bi bi-three-dots-vertical"></i>
                                <div class='more-detail-HD' style="display:none" index=${i}>
                                    <a class="button detail-hoadon"><i class="bi bi-info-circle"></i><p>Chi tiết hóa đơn</p></a>
                                    <a class="button update-hoadon"><i class="bi bi-pen"></i><p>Sửa hóa đơn</p></a>
                                    <a class="button updated"><i class="bi bi-file-earmark-plus"></i><p>Xuất hóa đơn</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        }
        i++
    })
    vams(`${document}`).forEach((tab) => {
        tab.innerHTML = RowHD + Items
    })
}
// Hiển thị hóa đơn
function HienThiHD(Children, document) {
    let Items = ''
    let i = 2
    Children.forEach((row) => {
        let v = parseFloat(row['Tổng Thanh Toán Sau Thuế GTGT']).toLocaleString("vi-VN")
        if (wid > 982) {
            Items += `
            <div class="items-HD" style="display:none" index=${i}>
            <div class="items-wrap">
                <p style="display:none" class="IDBD" index=${i}>${row['ID Khách Hàng']}</p>
                <p style="display:none" class="CSM" index=${i}>${row['Chỉ Số Mới']}</p>
                <h4 style="flex:4">${row['Ngày Lập Hoá Đơn']}</h4>
                <h4 style="flex:4">${v} đ</h4>
                <h4 style="flex:4">Chưa thanh toán</h4>
                <div style="flex:1;display:flex;justify-content:end;align-items:center">
                    <div class='bg-more-con' style="display: none"></div>
                    <div class="more-HD-con" index=${i}>
                        <i class="bi bi-three-dots-vertical"></i>
                        <div class='more-detail-HD' style="display:none" index=${i}>
                            <a class="button detail-hoadon"><i class="bi bi-info-circle"></i><p>Chi tiết hóa đơn</p></a>
                            <a class="button update-hoadon"><i class="bi bi-pen"></i><p>Sửa hóa đơn</p></a>
                            <a class="button updated"><i class="bi bi-file-earmark-plus"></i><p>Xuất hóa đơn</p></a>
                        </div> 
                    </div>
                </div>
            </div>                
            </div>
            `
        }
        else {
            Items += `
            <div class="items-HD" style="display:none" index=${i}>
            <div class="items-wrap">
                <p style="display:none" class="IDBD" index=${i}>${row['ID Khách Hàng']}</p>
                <p style="display:none" class="CSM" index=${i}>${row['Chỉ Số Mới']}</p>
                <div style="flex:1;display:flex; flex-direction: column;gap:5px">
                    <h4 >Thời gian tạo: ${date}</h4>
                    <h4 >Tổng tiền: ${v} đ</h4>
                    <h4 >Tình trạng: Chưa thanh toán</h4>
                </div>
                <div style="display:flex;justify-content:end;align-items:center">
                    <div class='bg-more-con' style="display: none"></div>
                    <div class="more-HD-con" index=${i}>
                        <i class="bi bi-three-dots-vertical"></i>
                        <div class='more-detail-HD' style="display:none" index=${i}>
                            <a class="button detail-hoadon"><i class="bi bi-info-circle"></i><p>Chi tiết hóa đơn</p></a>
                            <a class="button update-hoadon"><i class="bi bi-pen"></i><p>Sửa hóa đơn</p></a>
                            <a class="button updated"><i class="bi bi-file-earmark-plus"></i><p>Xuất hóa đơn</p></a>
                        </div> 
                    </div>
                </div>
            </div>                
            </div>
            `
        }
        i++
    })
    vam(`${document}`).innerHTML = Items
}

function CNTTHD(Children, document) {
    let Items = '';
    let i = 2;
    Children.forEach((row) => {
        let g = '';
        let h = '';

        if (row['Phương thức thanh toán'] == 'Chuyển khoản') {
            h = `<option style="padding: 5px 10px;" value="Chuyển khoản">Chuyển khoản</option>
            <option style="padding: 5px 10px;" value="Tiền mặt">Tiền mặt</option>
            `
        }
        if (row['Phương thức thanh toán'] == 'Tiền mặt') {
            h = `<option style="padding: 5px 10px;" value="Tiền mặt">Tiền mặt</option>
            <option style="padding: 5px 10px;" value="Chuyển khoản">Chuyển khoản</option>   
            `
        }
        if (row['Phương thức thanh toán'] == '') {
            h = `<option style="padding: 5px 10px;" value=""></option>
            <option style="padding: 5px 10px;" value="Chuyển khoản">Chuyển khoản</option>
            <option style="padding: 5px 10px;" value="Tiền mặt">Tiền mặt</option> 
            `
        }
        if (row['Tình trạng'] == 'Hết nợ') {
            g = `<option style="padding: 5px 10px;" value="Hết nợ">Hết nợ</option>
            <option style="padding: 5px 10px;" value="Còn nợ">Còn nợ</option>
            `

        }
        if (row['Tình trạng'] == 'Còn nợ') {
            g = `<option style="padding: 5px 10px;" value="Còn nợ">Còn nợ</option>
            <option style="padding: 5px 10px;" value="Hết nợ">Hết nợ</option>`
        }

        Items +=
            `<div class="cnttHD" index=${i} style="display:none">
                <form id="formttct"  >
                    <div style="display:none">
                        <input name="name" class="input-cnttHD" type="text" required value="${row['Kí Hiệu']}"></input>
                        <input name="id" class="input-cnttHD" type="text" required value="${row['Số Hoá Đơn']}"></input>
                        <input name="iddate" class="input-cnttHD" type="text" required value="${row['ID Khách Hàng']}"></input>
                        <input name="phone" class="input-cnttHD" type="text" required value="${row['Tên Khách Hàng']}"></input>
                        <input name="Pt" class="input-cnttHD" type="text" required value="${row['Địa Chỉ']}"></input>
                        <input name="address" class="input-cnttHD" type="text" required value="${row['Danh Bộ']}"></input>
                        <input name="T" class="input-cnttHD" type="text" required value="${row['Kỳ Thanh Toán']}"></input>
                        <input name="pay" class="input-cnttHD" type="text" required value="${row['Thuế GTGT']}"></input>
                        <input name="loai" class="input-cnttHD" type="text" required value="${row['Phí Môi Trường']}"></input>
                        <input name="Nb" class="input-cnttHD" type="text" required></input>
                        <input name="NameNH" class="input-cnttHD" type="text" required></input>
                        <input name="MsT" class="input-cnttHD" type="text" required></input>
                        <input name="lDH" class="input-cnttHD" type="text" required></input>
                        <input name="kDH" class="input-cnttHD" type="text" required></input>
                        <input name="lNT" class="input-cnttHD" type="text" required></input>
                        <input name="sH" class="input-cnttHD" type="text" required></input>
                        <input name="lHT" class="input-cnttHD" type="text" required></input>
                        <input name="mDH" class="input-cnttHD" type="text" required></input>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Chỉ Số Trước:</p>
                            <input class="input-cnttHD" name="DB" value="${row['Chỉ Số Cũ']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Chỉ Số Sau:</p>
                            <input class="input-cnttHD" name="STK" value="${row['Chỉ Số Mới']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Tình Trạng Hóa Đơn:</p>
                            <select     style="flex: 1;
                            outline: none;
                            margin: 0 10px;
                            padding: 5px 15px;
                            border: unset;
                            border-bottom: 1px solid #9e9e9e;"
                            name="tt" class="input-cnttHD" value="${row['Tình trạng']}">`
        Items += g
        Items += `</select>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Người Lập Hóa Đơn:</p>
                            <input class="input-cnttHD" name="Pmt" value="${row['Người Lập']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Ngày thu tiền:</p>
                            <input class="input-cnttHD" name="NT" value="${row['Ngày thu']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Nhân viên thu tiền:</p>
                            <input class="input-cnttHD" name="nvtt" value="${row['Nhân viên thu']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Tiền giảm:</p>
                            <input class="input-cnttHD" name="TG" value="${row['Tiền giảm']}"></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                        <div class="input-add-wrap">
                            <p>Ngày ghi chỉ số:</p>
                            <input name="addressdt" class="input-cnttHD" type="date" value="${row['Ngày Ghi Chỉ Số']}" required></input>
                        </div>
                    </div>
                    <div class="form-wrap-input form-wrap-input_HD">
                    <div class="input-add-wrap">
                        <p>Phương thức thanh toán:</p>
                        <select style="flex: 1;
                        outline: none;
                        margin: 0 10px;
                        padding: 5px 15px;
                        border: unset;
                        border-bottom: 1px solid #9e9e9e;"
                            name="pttt" class="input-cnttHD">`
        Items += h
        Items += `</select>
                    </div>
                </div>
                </form>
                <div class="submitadd">
                    <button class="cancel-HD">Hủy</button>
                    <button class="buttonup-HD" index=${i}>Lưu thông tin</button>
                </div>
            </div>`
        i++
    })
    vam(`${document}`).innerHTML += Items;

}

/* khách hàng */

// Hiển thị khách hàng 
function HienThiKH(Children, document) {
    let Items = '';
    let i = 2;
    let Row = `<div class="row-title">
        <h1 style="flex:4">Họ và Tên</h1>
        <h1 style="flex:8">Địa chỉ</h1>
        <h1 style="flex:4">Số điện thoại</h1>
        <h1 style="flex:4">Thời gian tạo</h1>
        <h1 style="flex:1"></h1></div>`
    Children.forEach((row) => {
        if (wid > 982) {
            Items += `
        <div class="items" dataName="${row['Tên khách hàng']}">
            <div class="items-wrap" index=${i}>               
                <p style="display:none" class="IDKH" index=${i}>${row['Số ID/DB']}</p>
                <p style="display:none" class="ttsd" index=${i}>${row['TTSD']}</p>
                <p style="display:none" class="LoaiKH" index=${i}>${row['Loại khách hàng']}</p>
                <h4 class="name-KH" index=${i} style="flex:4;display:flex;align-items:center"><i class="bi bi-person-circle"></i><p>${row['Tên khách hàng']}</p></h4>
                <h4 class="adress-KH" style="flex:8">${row['Địa chỉ']}</h4>
                <h4 style="flex:4">${row['Số điện thoại']}</h4>
                <h4 style="flex:4">${date}</h4>
                <div style="flex:1;display:flex;justify-content:end;align-items:center">
                    <div class="more" index=${i}>
                        <i class="bi bi-three-dots-vertical"></i>
                        <div class='more-detail' style="display:none" index=${i}>
                            <a class="button detail-box"><i class="bi bi-info-circle"></i><p>Thông tin chi tiết</p></a>
                            <a class="button updated"><i class="bi bi-pen"></i><p>Sửa thông tin</p></a>
                            <a class="button" href="tel:${row['Số điện thoại']}"><i class="bi bi-telephone"></i><p>Gọi điện</p></a>
                            <a class="button createHD"><i class="bi bi-clipboard-plus"></i><p>Tạo hóa đơn</p></a>
                            <a class="button xhd" ><i class="bi bi-clipboard-data"></i><p>Xem hóa đơn</p></a>
                            <a class="button thtt"><i class="bi bi-calendar2-check"></i><p>Tình hình tiêu thụ</p></a>
                            <div class="dot"></div>
                            <a class="button clearKH" index=${i}><i class="bi bi-trash"></i><p>Xóa Khách hàng</p></a>
                        </div> 
                    </div>
                </div>
            </div>                
        </div>
        
        `;
        }
        else {
            Items += `
        <div class="items" >
            <div class="items-wrap" index=${i}>
                <p style="display:none" class="IDKH" index=${i}>${row['Số ID/DB']}</p>
                <div style="flex:1;display:flex; flex-direction: column">
                    <h4>Họ và tên: <p  class="name-KH" index=${i}>${row['Tên khách hàng']}</p></h4>
                    <h4>Địa chỉ: <p class="adress-KH" >${row['Địa chỉ']}</p></h4>
                    <h4>Số điện thoại: <p>${row['Số điện thoại']}</p></h4>
                </div>
                <div style="display:flex;justify-content:end;align-items:center">
                    <div class="more" onclick="More()" index=${i}>
                        <i class="bi bi-three-dots-vertical"></i>
                        <div class='more-detail' style="display:none" index=${i}>
                            <a class="button detail-box"><i class="bi bi-info-circle"></i><p>Thông tin chi tiết</p></a>
                            <a class="button updated"><i class="bi bi-pen"></i><p>Sửa thông tin</p></a>
                            <a class="button" href="tel:${row['Số điện thoại']}"><i class="bi bi-telephone"></i><p>Gọi điện</p></a>
                            <a class="button createHD"><i class="bi bi-clipboard-plus"></i><p>Tạo hóa đơn</p></a>
                            <a class="button xhd" ><i class="bi bi-clipboard-data"></i><p>Xem hóa đơn</p></a>
                            <div class="dot"></div>
                            <a class="button clearKH" index=${i}><i class="bi bi-trash"></i><p>Xóa Khách hàng</p></a>
                        </div> 
                    </div>
                </div>
            </div>                
        </div>`;
        }
        i++
    })
    vam(`${document}`).innerHTML = Row + `<div class="wrap-items">` + Items + `</div>`
    More()
}

// Thông tin chi tiết khách hàng 

function ChiTietKH(Children, document) {
    let Items = '';
    let i = 2;
    Children.forEach((row) => {
        if (wid > 982) {
            Items +=
                `<div index=${i} style="display:none" class="ttct">
                    <div class="ttct-title"><p>Thông tin chi tiết</p><div><i class="bi bi-pencil-square"></i><p>Sửa</p></div></div>
                    <form id="formaddKH" style="margin-top:10px" >
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Họ và tên:</p>
                                <p class="ttct-text">${row['Tên khách hàng']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Số điện thoại:</p>
                                <p class="ttct-text" >${row['Số điện thoại']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số CCCD:</p>
                                <p class="ttct-text" >${row['Số CCCD']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Ngày cấp:</p>
                                <p class="ttct-text">${row['Ngày cấp']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Địa chỉ:</p>
                                <p class="ttct-text" >${row['Địa chỉ']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Phường, xã:</p>
                                <p class="ttct-text" >${row['Phường, xã']}</p>
                            </div>
                        </div>

                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số ID/DB:</p>
                                <p class="ttct-text">${row['Số ID/DB']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Số Hợp đồng:</p>
                                <p class="ttct-text" >${row['Số Hợp đồng']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Kì hóa đơn:</p>
                                <p class="ttct-text"> ${row['Kì hóa đơn']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số tài khoản:</p>
                                <p class="ttct-text">${row['Số tài khoản']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Tên Ngân Hàng:</p>
                                <p class="ttct-text">${row['Tên Ngân Hàng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Hình thức thanh toán:</p>
                                <p class="ttct-text" >${row['Hình thức thanh toán']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã số thuê:</p>
                                <p class="ttct-text">${row['Mã số thuê']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại đồng hồ:</p>
                                <p class="ttct-text" >${row['Loại đồng hồ']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Kích cỡ đồng hồ:</p>
                                <p class="ttct-text" >${row['Kích cỡ đồng hồ']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Mã đồng hồ:</p>
                                <p class="ttct-text" >${row['Mã đồng hồ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại khách hàng:</p>
                                <p class="ttct-text" >${row['Loại khách hàng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số hộ:</p>
                                <p class="ttct-text" >${row['Số hộ']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Là hộ trọ:</p>
                                <p class="ttct-text"  >${row['Là hộ trọ']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Là người trọ:</p>
                                <p class="ttct-text"  >${row['Là người trọ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phí môi trường:</p>
                                <p class="ttct-text"  >${row['Phí môi trường']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Trạng thái sử dụng:</p>
                                <p class="ttct-text"  >${row['TTSD']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày hoàn thành:</p>
                                <p class="ttct-text">${row['Ngày hoàn thành']}</p>
                            </div>
                            <div class="input-add-wrap">
                                <p>Ngày thay đồng hồ:</p>
                                <p class="ttct-text" >${row['Ngày thay đồng hồ']}</p>
                            </div>
                        </div>
                    </form>
                </div>`
        }
        else {
            Items +=
                `<div index=${i} style="display:none" class="ttct">
                    <form id="formaddKH"  >
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Họ và tên:</p>
                                <p class="ttct-text">${row['Tên khách hàng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số điện thoại:</p>
                                <p class="ttct-text" >${row['Số điện thoại']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số CCCD:</p>
                                <p class="ttct-text" >${row['Số CCCD']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày cấp:</p>
                                <p class="ttct-text">${row['Ngày cấp']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Địa chỉ:</p>
                                <p class="ttct-text" >${row['Địa chỉ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phường, xã:</p>
                                <p class="ttct-text" >${row['Phường, xã']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số ID/DB:</p>
                                <p class="ttct-text">${row['Số ID/DB']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số Hợp đồng:</p>
                                <p class="ttct-text" >${row['Số Hợp đồng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Kì hóa đơn:</p>
                                <p class="ttct-text"> ${row['Kì hóa đơn']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số tài khoản:</p>
                                <p class="ttct-text">${row['Số tài khoản']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Tên Ngân Hàng:</p>
                                <p class="ttct-text">${row['Tên Ngân Hàng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Hình thức thanh toán:</p>
                                <p class="ttct-text" >${row['Hình thức thanh toán']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã số thuê:</p>
                                <p class="ttct-text">${row['Mã số thuê']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại đồng hồ:</p>
                                <p class="ttct-text" >${row['Loại đồng hồ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Kích cỡ đồng hồ:</p>
                                <p class="ttct-text" >${row['Kích cỡ đồng hồ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã đồng hồ:</p>
                                <p class="ttct-text" >${row['Mã đồng hồ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại khách hàng:</p>
                                <p class="ttct-text" >${row['Loại khách hàng']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số hộ:</p>
                                <p class="ttct-text" >${row['Số hộ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Là hộ trọ:</p>
                                <p class="ttct-text"  >${row['Là hộ trọ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Là người trọ:</p>
                                <p class="ttct-text"  >${row['Là người trọ']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                        <div class="input-add-wrap">
                        <p>Trạng thái sử dụng:</p>
                        <p class="ttct-text"  >${row['TTSD']}</p>
                    </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phí môi trường:</p>
                                <p class="ttct-text"  >${row['Phí môi trường']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày hoàn thành:</p>
                                <p class="ttct-text">${row['Ngày hoàn thành']}</p>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày thay đồng hồ:</p>
                                <p class="ttct-text" >${row['Ngày thay đồng hồ']}</p>
                            </div>
                        </div>
                    </form>
                </div>`}
        i++
    })
    vam(`${document}`).innerHTML = Items
}

// Cập nhập thông tin khách hàng

function UpdateKH(Children, document) {
    let Items = ''
    let i = 2
    Children.forEach((row) => {
        if (wid > 982) {
            Items +=
                `<div index=${i} style="display:none" class="cntt">
                    <form id="formupKH"  >
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Họ và tên:</p>
                                <input name="name" class="input-ups" type="text" value="${row['Tên khách hàng']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Số điện thoại:</p>
                                <input name="phone" class="input-ups" type="text" value="${row['Số điện thoại']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số CCCD:</p>
                                <input name="id" class="input-ups" type="text" value="${row['Số CCCD']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Ngày cấp:</p>
                                <input name="iddate" class="input-ups" type="date" value="${row['Ngày cấp']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Địa chỉ:</p>
                                <input name="address" class="input-ups" type="text" value="${row['Địa chỉ']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Phường, xã:</p>
                                <input name="addressdt" class="input-ups" type="text" value="${row['Phường, xã']}"></input>
                            </div>
                        </div>

                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số ID/DB:</p>
                                <input name="DB" class="input-ups" type="text" value="${row['Số ID/DB']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Số Hợp đồng:</p>
                                <input name="Nb" class="input-ups" type="text" value="${row['Số Hợp đồng']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Kì hóa đơn:</p>
                                <input name="T" class="input-ups" type="text" value="${row['Kì hóa đơn']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số tài khoản:</p>
                                <input name="STK" class="input-ups" type="number" value="${row['Số tài khoản']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Tên Ngân Hàng:</p>
                                <input name="NameNH" class="input-ups" type="text" value="${row['Tên Ngân Hàng']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                        <div class="input-add-wrap">
                        <p>Hình thức thanh toán:</p>
                <select style="flex:1;outline: none;
                margin: 0 10px;
                padding: 5px 15px;
                border: unset;
                border-bottom: 1px solid #9e9e9e" name="loai"
                class="input-adds">
                        <option style="padding: 5px 10px;">Chuyển khoản</option>
                        <option style="padding: 5px 10px;">Tiền mặt</option>
                </select>
                    </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã số thuê:</p>
                                <input name="MsT" class="input-ups" type="text" value="${row['Mã số thuê']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại đồng hồ:</p>
                                <input name="lDH" class="input-ups" type="text" value="${row['Loại đồng hồ']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Kích cỡ đồng hồ:</p>
                                <input name="kDH" class="input-ups" type="text" value="${row['Kích cỡ đồng hồ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã đồng hồ:</p>
                                <input name="mDH" class="input-ups" type="text" value="${row['Mã đồng hồ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại khách hàng:</p>
                                <select style="flex:1;outline: none;
                                margin: 0 10px;
                                padding: 5px 15px;
                                border: unset;
                                border-bottom: 1px solid #9e9e9e" name="loai"
                                class="input-ups" value="${row['Loại khách hàng']}">
                                    <option style="padding: 5px 10px;" value="Loại 1">Loại 1</option>
                                    <option style="padding: 5px 10px;" value="Loại 2">Loại 2</option>
                                    <option style="padding: 5px 10px;" value="Loại 3">Loại 3</option>
                                    <option style="padding: 5px 10px;" value="Loại 4">Loại 4</option>
                                    <option style="padding: 5px 10px;" value="Loại 5">Loại 5</option>
                                    <option style="padding: 5px 10px;" value="Loại 6">Loại 6</option>
                                    <option style="padding: 5px 10px;" value="Loại 7">Loại 7</option>
                                    <option style="padding: 5px 10px;" value="Loại 8">Loại 8</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số hộ:</p>
                                <input name="sH" class="input-ups" type="text" value="${row['Số hộ']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Là hộ trọ:</p>
                                <input name="lHT" class="input-ups" type="text" value="${row['Là hộ trọ']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Là người trọ:</p>
                                <input name="lNT" class="input-ups" type="text" value="${row['Là người trọ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phí môi trường:</p>
                                <input name="Pmt" class="input-ups" type="text" value="${row['Phí môi trường']}"></input>
                            </div>
                            <div class="input-add-wrap">
                <p>Trạng thái sử dụng:</p>
                <select  style="flex:1;outline: none;
                margin: 0 10px;
                padding: 5px 15px;
                border: unset;
                border-bottom: 1px solid #9e9e9e" name="sa" class="input-ups">
                        <option style="padding: 5px 10px;" >Mở</option>
                        <option style="padding: 5px 10px;">Đóng</option>
                </select>
            </div> 
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày hoàn thành:</p>
                                <input name="dateS" class="input-ups" type="date" value="${row['Ngày hoàn thành']}"></input>
                            </div>
                            <div class="input-add-wrap">
                                <p>Ngày thay đồng hồ:</p>
                                <input name="dateT" class="input-ups" type="date" value="${row['Ngày thay đồng hồ']}"></input>
                            </div>
                        </div>
                    </form>
                    <div class="submitadd">
                        <button class="cancel">Hủy</button>
                        <button class="buttonup" index=${i}>Lưu thông tin</button>
                    </div>
                </div>`
        }
        else {
            Items +=
                `<div index=${i} style="display:none" class="cntt">
                    <form id="formupKH"  >
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Họ và tên:</p>
                                <input name="name" class="input-ups" type="text" value="${row['Tên khách hàng']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số điện thoại:</p>
                                <input name="phone" class="input-ups" type="text" value="${row['Số điện thoại']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số CCCD:</p>
                                <input name="id" class="input-ups" type="text" value="${row['Số CCCD']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày cấp:</p>
                                <input name="iddate" class="input-ups" type="date" value="${row['Ngày cấp']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Địa chỉ:</p>
                                <input name="address" class="input-ups" type="text" value="${row['Địa chỉ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phường, xã:</p>
                                <input name="addressdt" class="input-ups" type="text" value="${row['Phường, xã']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số ID/DB:</p>
                                <input name="DB" class="input-ups" type="text" value="${row['Số ID/DB']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số Hợp đồng:</p>
                                <input name="Nb" class="input-ups" type="text" value="${row['Số Hợp đồng']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Kì hóa đơn:</p>
                                <input name="T" class="input-ups" type="text" value="${row['Kì hóa đơn']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Tên Ngân Hàng:</p>
                                <input name="NameNH" class="input-ups" type="text" value="${row['Tên Ngân Hàng']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Tên Ngân Hàng:</p>
                                <input name="NameNH" class="input-ups" type="text" value="${row['Tên Ngân Hàng']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                        <div class="input-add-wrap">
                        <p>Hình thức thanh toán:</p>
                <select style="flex:1;outline: none;
                margin: 0 10px;
                padding: 5px 15px;
                border: unset;
                border-bottom: 1px solid #9e9e9e" name="loai"
                class="input-adds">
                        <option style="padding: 5px 10px;">Chuyển khoản</option>
                        <option style="padding: 5px 10px;">Tiền mặt</option>
                </select>
                    </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã số thuê:</p>
                                <input name="MsT" class="input-ups" type="text" value="${row['Mã số thuê']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại đồng hồ:</p>
                                <input name="lDH" class="input-ups" type="text" value="${row['Loại đồng hồ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Kích cỡ đồng hồ:</p>
                                <input name="kDH" class="input-ups" type="text" value="${row['Kích cỡ đồng hồ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Mã đồng hồ:</p>
                                <input name="mDH" class="input-ups" type="text" value="${row['Mã đồng hồ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Loại khách hàng:</p>
                                <select style="flex:1;outline: none;
                                margin: 0 10px;
                                padding: 5px 15px;
                                border: unset;
                                border-bottom: 1px solid #9e9e9e" name="loai"
                                class="input-ups" value="${row['Loại khách hàng']}">
                                    <option style="padding: 5px 10px;" value="Loại 1">Loại 1</option>
                                    <option style="padding: 5px 10px;" value="Loại 2">Loại 2</option>
                                    <option style="padding: 5px 10px;" value="Loại 3">Loại 3</option>
                                    <option style="padding: 5px 10px;" value="Loại 4">Loại 4</option>
                                    <option style="padding: 5px 10px;" value="Loại 5">Loại 5</option>
                                    <option style="padding: 5px 10px;" value="Loại 6">Loại 6</option>
                                    <option style="padding: 5px 10px;" value="Loại 7">Loại 7</option>
                                    <option style="padding: 5px 10px;" value="Loại 8">Loại 8</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Số hộ:</p>
                                <input name="sH" class="input-ups" type="text" value="${row['Số hộ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Là hộ trọ:</p>
                                <input name="lHT" class="input-ups" type="text" value="${row['Là hộ trọ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Là người trọ:</p>
                                <input name="lNT" class="input-ups" type="text" value="${row['Là người trọ']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Phí môi trường:</p>
                                <input name="Pmt" class="input-ups" type="text" value="${row['Phí môi trường']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                        <div class="input-add-wrap">
                <p>Trạng thái sử dụng:</p>
                <select  style="flex:1;outline: none;
                margin: 0 10px;
                padding: 5px 15px;
                border: unset;
                border-bottom: 1px solid #9e9e9e" name="sa" class="input-ups">
                        <option style="padding: 5px 10px;" >Mở</option>
                        <option style="padding: 5px 10px;" >Đóng</option>
                </select>
            </div> 
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày hoàn thành:</p>
                                <input name="dateS" class="input-ups" type="date" value="${row['Ngày hoàn thành']}"></input>
                            </div>
                        </div>
                        <div class="form-wrap-input">
                            <div class="input-add-wrap">
                                <p>Ngày thay đồng hồ:</p>
                                <input name="dateT" class="input-ups" type="date" value="${row['Ngày thay đồng hồ']}"></input>
                            </div>
                        </div>
                    </form>
                    <div class="submitadd">
                        <button class="cancel">Hủy</button>
                        <button class="buttonup" index=${i}>Lưu thông tin</button>
                    </div>
                </div>`
        }
        i++
    })
    vam(`${document}`).innerHTML += Items
}

/* tình hình tiêu thụ khách hành */
function TinhHinhTieuThu(Children, document) {
    let Items = '';
    let i = 2;
    let h = '';
    Children.forEach((row) => {
        if (row['Đơn Giá'] == '22000') {
            h = 'Loại 8'
        }
        if (row['Đơn Giá'] == '18500') {
            h = 'Loại 7'
        }
        if (row['Đơn Giá'] == '15000') {
            h = 'Loại 6'
        }
        if (row['Đơn Giá'] == '14500') {
            h = 'Loại 5'
        }
        if (row['Đơn Giá'] == '12800') {
            h = 'Loại 4'
        }
        if (row['Đơn Giá'] == '12500') {
            h = 'Loại 3'
        }
        if (row['Đơn Giá'] == '9500') {
            h = 'Loại 2'
        }
        if (row['Đơn Giá'] == '5800') {
            h = 'Loại 1'
        }
        let gg = new Date(row['Ngày Ghi Chỉ Số'])
        Items +=
            `<div class="thttKH_items" style="display:none" index=${i}>
                <p style="display:none" class="thttIDBD" index=${i}>${row['ID Khách Hàng']}</p>
                <p class="kyhd">${gg.getMonth() + 1 + '/' + gg.getFullYear()}  </p>
                <p class="gia">${h}</p>
                <p class="csc">${row['Chỉ Số Cũ']}</p>
                <p class="csm">${row['Chỉ Số Mới']}</p>
                <p class="kltt">${row['Khối Lượng Tiêu Thụ']}</p>
                <p class="tn">${parseFloat(row['Tiền Nước Trước Thuế']).toLocaleString("vi-VN")} vnđ</p>
                <p class="tt">${parseFloat(row['Thuế GTGT']).toLocaleString("vi-VN")} vnđ</p>
                <p class="tp">${parseFloat(row['Phí Môi Trường']).toLocaleString("vi-VN")} vnđ</p>
                <p class="tg">0</p>
                <p class="t" id="${row['Tổng Thanh Toán Sau Thuế GTGT']}">${parseFloat(row['Tổng Thanh Toán Sau Thuế GTGT']).toLocaleString("vi-VN")} vnđ</p>
                <p class="tn tinhtranghd">${row['Tình trạng']}</p>
                <p class="lt">${row['Phương thức thanh toán']}</p>
                <p class="nv">${row['Nhân viên thu']}</p>
                <p class="nt">${row['Ngày thu']}</p>
            </div>`
        i++
    })
    vam(`${document}`).innerHTML = Items
}


function lockihoadon(Children) {
    var gut = [];
    var hdt = []
    Children.forEach((t) => {
        if (t['Tình trạng'] == 'Hết nợ') {
            let gg = new Date(t['Ngày Ghi Chỉ Số']);
            let h = gg.getMonth() + 1 + '/' + gg.getFullYear()
            if (gut[h]) {
                gut[h]++
            }
            else {
                gut[h] = 1
            }
        }
        else {
            let gg = new Date(t['Ngày Ghi Chỉ Số']);
            let h = gg.getMonth() + 1 + '/' + gg.getFullYear()
            if (hdt[h]) {
                hdt[h]++
            }
            else {
                hdt[h] = 1
            }
        }
    })
    let Pro_wrap = '';
    let Pro_wrap1 = '';
    let o = 1
    Object.keys(gut).forEach(key => {
        Pro_wrap += `<option style="padding: 5px 10px;" value="${key}" id=${o}>${key}</option>`;
        o++
    })
    let y = 1
    Object.keys(hdt).forEach(key => {
        Pro_wrap1 += `<option style="padding: 5px 10px;" value="${key}" id=${y}>${key}</option>`;
        y++
    })
    vam('#kihoadonton').innerHTML = Pro_wrap1;
    vam('#kibaocaodt').innerHTML = Pro_wrap;
    if (vam('#kibaocaodt option[id="1"]') == null) {
        loaddulieutong(0)
    }
    if (vam('#kibaocaodt option[id="1"]') != null) {
        loaddulieutong(vam('#kibaocaodt option[id="1"]').value)
        vam('.title-bkhdt__325').innerText = 'BẢNG CÁO DOANH THU KÌ ' + vam('#kibaocaodt option[id="1"]').value;
    }
    if (vam('#kihoadonton option[id="1"]') == null) {
        loaddulieuhoadonton(0)
    }
    if (vam('#kihoadonton option[id="1"]') != null) {
        loaddulieuhoadonton(vam('#kihoadonton option[id="1"]').value)
        vams('.title-bkhdt__325')[1].innerText = 'BẢNG KÊ HÓA ĐƠN TỒN KÌ ' + vam('#kihoadonton option[id="1"]').value;
    }

}

function thaydoi(e) {
    let td = e.value
    vam('.title-bkhdt__325').innerText = 'tg';
    let item = ''
    loaddulieutong(td)
}

function ind() {
    const element = vam('#inbcdt');
    html2pdf(element, {
        margin: 0,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    });
}

function loaddulieutong(td) {
    fetchSheet
        .fetch({
            gSheetId: "1PNf5Yvl9yyPByBG9oaDD-_IiJE6N1f0femguCtiUH7o",
            wSheetName: "tbHoaDon"
        })
        .then((rows) => {
            let hd1 = 0;
            let kl1 = 0;
            let tg1 = 0;
            let tn1 = 0;
            let tt1 = 0;
            let tp1 = 0;
            let sum1 = 0;
            let hd2 = 0;
            let kl2 = 0;
            let tg2 = 0;
            let tn2 = 0;
            let tt2 = 0;
            let tp2 = 0;
            let sum2 = 0;
            let hd3 = 0;
            let kl3 = 0;
            let tg3 = 0;
            let tn3 = 0;
            let tt3 = 0;
            let tp3 = 0;
            let sum3 = 0;
            let hd4 = 0;
            let kl4 = 0;
            let tg4 = 0;
            let tn4 = 0;
            let tt4 = 0;
            let tp4 = 0;
            let sum4 = 0;
            let hd5 = 0;
            let kl5 = 0;
            let tg5 = 0;
            let tn5 = 0;
            let tt5 = 0;
            let tp5 = 0;
            let sum5 = 0;
            let hd6 = 0;
            let kl6 = 0;
            let tg6 = 0;
            let tn6 = 0;
            let tt6 = 0;
            let tp6 = 0;
            let sum6 = 0;
            let hd7 = 0;
            let kl7 = 0;
            let tg7 = 0;
            let tn7 = 0;
            let tt7 = 0;
            let tp7 = 0;
            let sum7 = 0;
            let hd8 = 0;
            let kl8 = 0;
            let tg8 = 0;
            let tn8 = 0;
            let tt8 = 0;
            let tp8 = 0;
            let sum8 = 0;
            let hd9 = 0;
            let kl9 = 0;
            let tg9 = 0;
            let tn9 = 0;
            let tt9 = 0;
            let tp9 = 0;
            let sum9 = 0;
            if (td == 0) {
                item =
                    `<div class="bcdt_items">
        <p>Loại 1</p>
        <p>${hd1}</p>
        <p>${kl1}</p>
        <p>${parseFloat(tg1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum1).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 2</p>
        <p>${hd2}</p>
        <p>${kl2}</p>
        <p>${parseFloat(tg2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum2).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 3</p>
        <p>${hd3}</p>
        <p>${kl3}</p>
        <p>${parseFloat(tg3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum3).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 4</p>
        <p>${hd4}</p>
        <p>${kl4}</p>
        <p>${parseFloat(tg4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum4).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 5</p>
        <p>${hd5}</p>
        <p>${kl5}</p>
        <p>${parseFloat(tg5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum5).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 6</p>
        <p>${hd6}</p>
        <p>${kl6}</p>
        <p>${parseFloat(tg6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum6).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 7</p>
        <p>${hd7}</p>
        <p>${kl7}</p>
        <p>${parseFloat(tg7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum7).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 8</p>
        <p>${hd8}</p>
        <p>${kl8}</p>
        <p>${parseFloat(tg8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum8).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Tổng</p>
        <p>${hd9}</p>
        <p>${kl9}</p>
        <p>${parseFloat(tg9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum9).toLocaleString("vi-VN")} vnđ</p>
    </div>`
            }
            else {
                rows.forEach((t) => {
                    if (new Date(t['Ngày Ghi Chỉ Số']).getMonth() + 1 + '/' + new Date(t['Ngày Ghi Chỉ Số']).getFullYear() == td && t['Tình trạng'] == 'Hết nợ') {
                        if (t['Đơn Giá'] == 5800) {
                            hd1++;
                            kl1 = kl1 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg1 = tg1 + Number(t['Tiền giảm']);
                            tn1 = tn1 + Number(t['Tiền Nước Trước Thuế']);
                            tt1 = tt1 + Number(t['Thuế GTGT']);
                            tp1 = tp1 + Number(t['Phí Môi Trường']);
                            sum1 = sum1 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 9500) {
                            hd2++;
                            kl2 = kl2 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg2 = tg2 + Number(t['Tiền giảm']);
                            tn2 = tn2 + Number(t['Tiền Nước Trước Thuế']);
                            tt2 = tt2 + Number(t['Thuế GTGT']);
                            tp2 = tp2 + Number(t['Phí Môi Trường']);
                            sum2 = sum2 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 12500) {
                            hd3++;
                            kl3 = kl3 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg3 = tg3 + Number(t['Tiền giảm']);
                            tn3 = tn3 + Number(t['Tiền Nước Trước Thuế']);
                            tt3 = tt3 + Number(t['Thuế GTGT']);
                            tp3 = tp3 + Number(t['Phí Môi Trường']);
                            sum3 = sum3 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 12800) {
                            hd4++;
                            kl4 = kl4 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg4 = tg4 + Number(t['Tiền giảm']);
                            tn4 = tn4 + Number(t['Tiền Nước Trước Thuế']);
                            tt4 = tt4 + Number(t['Thuế GTGT']);
                            tp4 = tp4 + Number(t['Phí Môi Trường']);
                            sum4 = sum4 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 14500) {
                            hd5++;
                            kl5 = kl5 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg5 = tg5 + Number(t['Tiền giảm']);
                            tn5 = tn5 + Number(t['Tiền Nước Trước Thuế']);
                            tt5 = tt5 + Number(t['Thuế GTGT']);
                            tp5 = tp5 + Number(t['Phí Môi Trường']);
                            sum5 = sum5 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 15000) {
                            hd6++;
                            kl6 = kl6 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg6 = tg6 + Number(t['Tiền giảm']);
                            tn6 = tn6 + Number(t['Tiền Nước Trước Thuế']);
                            tt6 = tt6 + Number(t['Thuế GTGT']);
                            tp6 = tp6 + Number(t['Phí Môi Trường']);
                            sum6 = sum6 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 18500) {
                            hd7++;
                            kl7 = kl7 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg7 = tg7 + Number(t['Tiền giảm']);
                            tn7 = tn7 + Number(t['Tiền Nước Trước Thuế']);
                            tt7 = tt7 + Number(t['Thuế GTGT']);
                            tp7 = tp7 + Number(t['Phí Môi Trường']);
                            sum7 = sum7 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 22000) {
                            hd8++;
                            kl8 = kl8 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg8 = tg8 + Number(t['Tiền giảm']);
                            tn8 = tn8 + Number(t['Tiền Nước Trước Thuế']);
                            tt8 = tt8 + Number(t['Thuế GTGT']);
                            tp8 = tp8 + Number(t['Phí Môi Trường']);
                            sum8 = sum8 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }

                        hd9++;
                        kl9 = kl9 + Number(t['Khối Lượng Tiêu Thụ']);
                        tg9 = tg9 + Number(t['Tiền giảm']);
                        tn9 = tn9 + Number(t['Tiền Nước Trước Thuế']);
                        tt9 = tt9 + Number(t['Thuế GTGT']);
                        tp9 = tp9 + Number(t['Phí Môi Trường']);
                        sum9 = sum9 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                    }
                    item =
                        `<div class="bcdt_items">
                <p>Loại 1</p>
                <p>${hd1}</p>
                <p>${kl1}</p>
                <p>${parseFloat(tg1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum1).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 2</p>
                <p>${hd2}</p>
                <p>${kl2}</p>
                <p>${parseFloat(tg2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum2).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 3</p>
                <p>${hd3}</p>
                <p>${kl3}</p>
                <p>${parseFloat(tg3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum3).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 4</p>
                <p>${hd4}</p>
                <p>${kl4}</p>
                <p>${parseFloat(tg4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum4).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 5</p>
                <p>${hd5}</p>
                <p>${kl5}</p>
                <p>${parseFloat(tg5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum5).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 6</p>
                <p>${hd6}</p>
                <p>${kl6}</p>
                <p>${parseFloat(tg6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum6).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 7</p>
                <p>${hd7}</p>
                <p>${kl7}</p>
                <p>${parseFloat(tg7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum7).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 8</p>
                <p>${hd8}</p>
                <p>${kl8}</p>
                <p>${parseFloat(tg8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum8).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Tổng</p>
                <p>${hd9}</p>
                <p>${kl9}</p>
                <p>${parseFloat(tg9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum9).toLocaleString("vi-VN")} vnđ</p>
            </div>`
                })
            }


            vam('#bcdtkh_main').innerHTML = item
        });

}


// hóa đơn tồn 

function loaddulieuhoadonton(td) {
    fetchSheet
        .fetch({
            gSheetId: "1PNf5Yvl9yyPByBG9oaDD-_IiJE6N1f0femguCtiUH7o",
            wSheetName: "tbHoaDon"
        })
        .then((rows) => {
            let hd1 = 0;
            let kl1 = 0;
            let tg1 = 0;
            let tn1 = 0;
            let tt1 = 0;
            let tp1 = 0;
            let sum1 = 0;
            let hd2 = 0;
            let kl2 = 0;
            let tg2 = 0;
            let tn2 = 0;
            let tt2 = 0;
            let tp2 = 0;
            let sum2 = 0;
            let hd3 = 0;
            let kl3 = 0;
            let tg3 = 0;
            let tn3 = 0;
            let tt3 = 0;
            let tp3 = 0;
            let sum3 = 0;
            let hd4 = 0;
            let kl4 = 0;
            let tg4 = 0;
            let tn4 = 0;
            let tt4 = 0;
            let tp4 = 0;
            let sum4 = 0;
            let hd5 = 0;
            let kl5 = 0;
            let tg5 = 0;
            let tn5 = 0;
            let tt5 = 0;
            let tp5 = 0;
            let sum5 = 0;
            let hd6 = 0;
            let kl6 = 0;
            let tg6 = 0;
            let tn6 = 0;
            let tt6 = 0;
            let tp6 = 0;
            let sum6 = 0;
            let hd7 = 0;
            let kl7 = 0;
            let tg7 = 0;
            let tn7 = 0;
            let tt7 = 0;
            let tp7 = 0;
            let sum7 = 0;
            let hd8 = 0;
            let kl8 = 0;
            let tg8 = 0;
            let tn8 = 0;
            let tt8 = 0;
            let tp8 = 0;
            let sum8 = 0;
            let hd9 = 0;
            let kl9 = 0;
            let tg9 = 0;
            let tn9 = 0;
            let tt9 = 0;
            let tp9 = 0;
            let sum9 = 0;
            if (td == 0) {
                item =
                    `<div class="bcdt_items">
        <p>Loại 1</p>
        <p>${hd1}</p>
        <p>${kl1}</p>
        <p>${parseFloat(tg1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp1).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum1).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 2</p>
        <p>${hd2}</p>
        <p>${kl2}</p>
        <p>${parseFloat(tg2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp2).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum2).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 3</p>
        <p>${hd3}</p>
        <p>${kl3}</p>
        <p>${parseFloat(tg3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp3).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum3).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 4</p>
        <p>${hd4}</p>
        <p>${kl4}</p>
        <p>${parseFloat(tg4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp4).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum4).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 5</p>
        <p>${hd5}</p>
        <p>${kl5}</p>
        <p>${parseFloat(tg5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp5).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum5).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 6</p>
        <p>${hd6}</p>
        <p>${kl6}</p>
        <p>${parseFloat(tg6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp6).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum6).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 7</p>
        <p>${hd7}</p>
        <p>${kl7}</p>
        <p>${parseFloat(tg7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp7).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum7).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Loại 8</p>
        <p>${hd8}</p>
        <p>${kl8}</p>
        <p>${parseFloat(tg8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp8).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum8).toLocaleString("vi-VN")} vnđ</p>
    </div>
    <div class="bcdt_items">
        <p>Tổng</p>
        <p>${hd9}</p>
        <p>${kl9}</p>
        <p>${parseFloat(tg9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tn9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tt9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(tp9).toLocaleString("vi-VN")} vnđ</p>
        <p>${parseFloat(sum9).toLocaleString("vi-VN")} vnđ</p>
    </div>`
            }
            else {
                rows.forEach((t) => {
                    if (new Date(t['Ngày Ghi Chỉ Số']).getMonth() + 1 + '/' + new Date(t['Ngày Ghi Chỉ Số']).getFullYear() == td && t['Tình trạng'] == 'Còn nợ') {
                        if (t['Đơn Giá'] == 5800) {
                            hd1++;
                            kl1 = kl1 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg1 = tg1 + Number(t['Tiền giảm']);
                            tn1 = tn1 + Number(t['Tiền Nước Trước Thuế']);
                            tt1 = tt1 + Number(t['Thuế GTGT']);
                            tp1 = tp1 + Number(t['Phí Môi Trường']);
                            sum1 = sum1 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 9500) {
                            hd2++;
                            kl2 = kl2 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg2 = tg2 + Number(t['Tiền giảm']);
                            tn2 = tn2 + Number(t['Tiền Nước Trước Thuế']);
                            tt2 = tt2 + Number(t['Thuế GTGT']);
                            tp2 = tp2 + Number(t['Phí Môi Trường']);
                            sum2 = sum2 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 12500) {
                            hd3++;
                            kl3 = kl3 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg3 = tg3 + Number(t['Tiền giảm']);
                            tn3 = tn3 + Number(t['Tiền Nước Trước Thuế']);
                            tt3 = tt3 + Number(t['Thuế GTGT']);
                            tp3 = tp3 + Number(t['Phí Môi Trường']);
                            sum3 = sum3 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 12800) {
                            hd4++;
                            kl4 = kl4 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg4 = tg4 + Number(t['Tiền giảm']);
                            tn4 = tn4 + Number(t['Tiền Nước Trước Thuế']);
                            tt4 = tt4 + Number(t['Thuế GTGT']);
                            tp4 = tp4 + Number(t['Phí Môi Trường']);
                            sum4 = sum4 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 14500) {
                            hd5++;
                            kl5 = kl5 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg5 = tg5 + Number(t['Tiền giảm']);
                            tn5 = tn5 + Number(t['Tiền Nước Trước Thuế']);
                            tt5 = tt5 + Number(t['Thuế GTGT']);
                            tp5 = tp5 + Number(t['Phí Môi Trường']);
                            sum5 = sum5 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 15000) {
                            hd6++;
                            kl6 = kl6 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg6 = tg6 + Number(t['Tiền giảm']);
                            tn6 = tn6 + Number(t['Tiền Nước Trước Thuế']);
                            tt6 = tt6 + Number(t['Thuế GTGT']);
                            tp6 = tp6 + Number(t['Phí Môi Trường']);
                            sum6 = sum6 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 18500) {
                            hd7++;
                            kl7 = kl7 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg7 = tg7 + Number(t['Tiền giảm']);
                            tn7 = tn7 + Number(t['Tiền Nước Trước Thuế']);
                            tt7 = tt7 + Number(t['Thuế GTGT']);
                            tp7 = tp7 + Number(t['Phí Môi Trường']);
                            sum7 = sum7 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        if (t['Đơn Giá'] == 22000) {
                            hd8++;
                            kl8 = kl8 + Number(t['Khối Lượng Tiêu Thụ']);
                            tg8 = tg8 + Number(t['Tiền giảm']);
                            tn8 = tn8 + Number(t['Tiền Nước Trước Thuế']);
                            tt8 = tt8 + Number(t['Thuế GTGT']);
                            tp8 = tp8 + Number(t['Phí Môi Trường']);
                            sum8 = sum8 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        }
                        hd9++;
                        kl9 = kl9 + Number(t['Khối Lượng Tiêu Thụ']);
                        tg9 = tg9 + Number(t['Tiền giảm']);
                        tn9 = tn9 + Number(t['Tiền Nước Trước Thuế']);
                        tt9 = tt9 + Number(t['Thuế GTGT']);
                        tp9 = tp9 + Number(t['Phí Môi Trường']);
                        sum9 = sum9 + Number(t['Tổng Thanh Toán Sau Thuế GTGT']);
                        item =
                            `<div class="bcdt_items">
                <p>Loại 1</p>
                <p>${hd1}</p>
                <p>${kl1}</p>
                <p>${parseFloat(tg1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp1).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum1).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 2</p>
                <p>${hd2}</p>
                <p>${kl2}</p>
                <p>${parseFloat(tg2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp2).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum2).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 3</p>
                <p>${hd3}</p>
                <p>${kl3}</p>
                <p>${parseFloat(tg3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp3).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum3).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 4</p>
                <p>${hd4}</p>
                <p>${kl4}</p>
                <p>${parseFloat(tg4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp4).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum4).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 5</p>
                <p>${hd5}</p>
                <p>${kl5}</p>
                <p>${parseFloat(tg5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp5).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum5).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 6</p>
                <p>${hd6}</p>
                <p>${kl6}</p>
                <p>${parseFloat(tg6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp6).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum6).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 7</p>
                <p>${hd7}</p>
                <p>${kl7}</p>
                <p>${parseFloat(tg7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp7).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum7).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Loại 8</p>
                <p>${hd8}</p>
                <p>${kl8}</p>
                <p>${parseFloat(tg8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp8).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum8).toLocaleString("vi-VN")} vnđ</p>
            </div>
            <div class="bcdt_items">
                <p>Tổng</p>
                <p>${hd9}</p>
                <p>${kl9}</p>
                <p>${parseFloat(tg9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tn9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tt9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(tp9).toLocaleString("vi-VN")} vnđ</p>
                <p>${parseFloat(sum9).toLocaleString("vi-VN")} vnđ</p>
            </div>`
                    }
                })
            }
            vam('#bchdt_main').innerHTML = item
        });

}