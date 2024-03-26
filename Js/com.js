const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);
const URL =
    "https://script.google.com/macros/s/AKfycbzkXEyOuoSE2ENbP-Dk_PbfmqaTRIRgHndey77K6mUjfQOaSfLDPgkRjlFNEZP5Lgwy0A/exec";
var wid = screen.width
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
if (wid > 982) {
    var Add = `
            <form id="formaddKH">
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Họ và tên:</p>
                        <input name="name" class="input-adds" type="text" required></input>
                    </div>
                    <div class="input-add-wrap">
                        <p>Số điện thoại:</p>
                        <input name="phone" class="input-adds" type="text" required></input>
                    </div>
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Số CCCD:</p>
                        <input name="id" class="input-adds" type="text" required></input>
                    </div>
                    <div class="input-add-wrap">
                        <p>Ngày cấp:</p>
                        <input name="iddate" class="input-adds" type="date" required></input>
                    </div>   
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Địa chỉ:</p>
                        <input name="address" class="input-adds" type="text" required></input>
                    </div>
                    <div class="input-add-wrap">
                        <p>Phường, xã:</p>
                        <input name="addressdt" class="input-adds" type="text" required></input>
                    </div>               
                </div>
                
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Số ID/DB:</p>
                        <input name="DB" class="input-adds" type="text" required></input>
                    </div>
                    <div class="input-add-wrap">
                        <p>Số Hợp đồng:</p>
                        <input name="Nb" class="input-adds" type="text" required></input>
                    </div>
                    <div class="input-add-wrap">
                        <p>Kì hóa đơn:</p>
                        <input name="T" class="input-adds" type="text" required></input>
                    </div>  
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Số tài khoản:</p>
                        <input name="STK" class="input-adds" type="number" required></input>
                    </div>    
                    <div class="input-add-wrap">
                        <p>Tên Ngân Hàng:</p>
                        <input name="NameNH" class="input-adds" type="text" required></input>
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
                        <input name="MsT" class="input-adds" type="text" required></input>
                    </div>               
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Loại đồng hồ:</p>
                        <input name="lDH" class="input-adds" type="text" required></input>
                    </div>               
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Kích cỡ đồng hồ:</p>
                        <input name="kDH" class="input-adds" type="text" required></input>
                    </div>               
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Mã đồng hồ:</p>
                        <input name="mDH" class="input-adds" type="text" required></input>
                    </div>               
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap" style="gap:1rem">
                        <p>Loại khách hàng:</p>
                        <select style="flex:1;outline: none;
                        margin: 0 10px;
                        padding: 5px 15px;
                        border: unset;
                        border-bottom: 1px solid #9e9e9e" name="loai"
                        class="input-adds">
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
                        <input name="sH" class="input-adds" type="text" required></input>
                    </div>   
                    <div class="input-add-wrap">
                        <p>Là hộ trọ:</p>
                        <input name="lHT" class="input-adds" type="text" required></input>
                    </div>  
                    <div class="input-add-wrap">
                        <p>Là người trọ:</p>
                        <input name="lNT" class="input-adds" type="text" required></input>
                    </div>             
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Phí môi trường:</p>
                        <input name="Pmt" class="input-adds" type="text" required></input>
                    </div>    
                    <div class="input-add-wrap">
                <p>Trạng thái sử dụng:</p>
                <select  style="flex:1;outline: none;
                margin: 0 10px;
                padding: 5px 15px;
                border: unset;
                border-bottom: 1px solid #9e9e9e" name="sa" class="input-adds">
                        <option style="padding: 5px 10px;" value="Mở">Mở</option>
                        <option style="padding: 5px 10px;" value="Đóng">Đóng</option>
                </select>
            </div>           
                </div>
                <div class="form-wrap-input">
                    <div class="input-add-wrap">
                        <p>Ngày hoàn thành:</p>
                        <input name="dateS" class="input-adds" type="date" required></input>
                    </div> 
                    <div class="input-add-wrap">
                        <p>Ngày thay đồng hồ:</p>
                        <input name="dateT" class="input-adds" type="date" required></input>
                    </div>  
                                  
                </div>             
            </form>
            <div class="submitadd">
                <button id="getadd" type="submit">Thêm khách hàng</button>
            </div>

`
}

else {
    var Add = `
    <form id="formaddKH">
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Họ và tên:</p>
                <input name="name" class="input-adds" type="text" required></input>
            </div>
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Số điện thoại:</p>
                <input name="phone" class="input-adds" type="text" required></input>
            </div>
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Số CCCD:</p>
                <input name="id" class="input-adds" type="text" required></input>
            </div>  
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Ngày cấp:</p>
                <input name="iddate" class="input-adds" type="date" required></input>
            </div>   
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Địa chỉ:</p>
                <input name="address" class="input-adds" type="text" required></input>
            </div>              
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Phường, xã:</p>
                <input name="addressdt" class="input-adds" type="text" required></input>
            </div>               
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Kì hóa đơn:</p>
                <input name="T" class="input-adds" type="text" required></input>
            </div>  
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Số Hợp đồng:</p>
                <input name="Nb" class="input-adds" type="text" required></input>
            </div>
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Kì hóa đơn:</p>
                <input name="T" class="input-adds" type="text" required></input>
            </div>  
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Số tài khoản:</p>
                <input name="STK" class="input-adds" type="number" required></input>
            </div>           
        </div>
        <div class="form-wrap-input">   
            <div class="input-add-wrap">
                <p>Tên Ngân Hàng:</p>
                <input name="NameNH" class="input-adds" type="text" required></input>
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
                <input name="MsT" class="input-adds" type="text" required></input>
            </div>               
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Loại đồng hồ:</p>
                <input name="lDH" class="input-adds" type="text" required></input>
            </div>               
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Kích cỡ đồng hồ:</p>
                <input name="kDH" class="input-adds" type="text" required></input>
            </div>               
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Mã đồng hồ:</p>
                <input name="mDH" class="input-adds" type="text" required></input>
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
                class="input-adds">
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
                <input name="sH" class="input-adds" type="text" required></input>
            </div>             
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Là hộ trọ:</p>
                <input name="lHT" class="input-adds" type="text" required></input>
            </div>             
        </div>
        <div class="form-wrap-input"> 
            <div class="input-add-wrap">
                <p>Là người trọ:</p>
                <input name="lNT" class="input-adds" type="text" required></input>
            </div>             
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Phí môi trường:</p>
                <input name="Pmt" class="input-adds" type="text" required></input>
            </div>               
        </div>
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Ngày hoàn thành:</p>
                <input name="dateS" class="input-adds" type="date" required></input>
            </div>              
        </div>  
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Ngày thay đồng hồ:</p>
                <input name="dateT" class="input-adds" type="date" required></input>
            </div>                
        </div>  
        <div class="form-wrap-input">
            <div class="input-add-wrap">
                <p>Trạng thái sử dụng:</p>
                <select style="margin: 0;width: calc(100%);border: 1px solid rgb(198,205,211);" name="sa" class="input-adds">
                        <option style="padding: 5px 10px;">Mở</option>
                        <option style="padding: 5px 10px;">Đóng</option>
                </select>
            </div>                
        </div>           
    </form>
    <div class="submitadd">
        <button id="getadd" type="submit">Thêm khách hàng</button>
    </div>

`
}

vam('.form-wrap').innerHTML = Add;
const defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';

const chuHangDonVi = ('1 một' + defaultNumbers).split(' ');
const chuHangChuc = ('lẻ mười' + defaultNumbers).split(' ');
const chuHangTram = ('không một' + defaultNumbers).split(' ');

function convert_block_three(number) {
    if (number == '000') return '';
    var _a = number + ''; //Convert biến 'number' thành kiểu string

    //Kiểm tra độ dài của khối
    switch (_a.length) {
        case 0: return '';
        case 1: return chuHangDonVi[_a];
        case 2: return convert_block_two(_a);
        case 3:
            var chuc_dv = '';
            if (_a.slice(1, 3) != '00') {
                chuc_dv = convert_block_two(_a.slice(1, 3));
            }
            var tram = chuHangTram[_a[0]] + ' trăm';
            return tram + ' ' + chuc_dv;
    }
}

function convert_block_two(number) {
    var dv = chuHangDonVi[number[1]];
    var chuc = chuHangChuc[number[0]];
    var append = '';

    // Nếu chữ số hàng đơn vị là 5
    if (number[0] > 0 && number[1] == 5) {
        dv = 'lăm'
    }

    // Nếu số hàng chục lớn hơn 1
    if (number[0] > 1) {
        append = ' mươi';

        if (number[1] == 1) {
            dv = ' mốt';
        }
    }

    return chuc + '' + append + ' ' + dv;
}
const dvBlock = '1 nghìn triệu tỷ'.split(' ');

function to_vietnamese(number) {
    var str = parseInt(number) + '';
    var i = 0;
    var arr = [];
    var index = str.length;
    var result = [];
    var rsString = '';

    if (index == 0 || str == 'NaN') {
        return '';
    }

    // Chia chuỗi số thành một mảng từng khối có 3 chữ số
    while (index >= 0) {
        arr.push(str.substring(index, Math.max(index - 3, 0)));
        index -= 3;
    }

    // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '' && arr[i] != '000') {
            result.push(convert_block_three(arr[i]));

            // Thêm đuôi của mỗi khối
            if (dvBlock[i]) {
                result.push(dvBlock[i]);
            }
        }
    }

    // Join mảng kết quả lại thành chuỗi string
    rsString = result.join(' ');

    // Trả về kết quả kèm xóa những ký tự thừa
    return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
}

/* số ngẫu nhiên */
function generateUniqueString(length) {
    const characters = 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    let randomString = '';
    const usedChars = [];

    while (randomString.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const char = characters[randomIndex];

        if (!usedChars.includes(char)) {
            randomString += char;
            usedChars.push(char);
        }
    }
    return randomString;
}
function generateUnique(length) {
    const characters = '0123456789';
    let randomString = '';
    const usedChars = [];

    while (randomString.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const char = characters[randomIndex];

        if (!usedChars.includes(char)) {
            randomString += char;
            usedChars.push(char);
        }
    }
    return randomString;
}

var thongbaoxoa = `
<div class="thongbaoxoa">
    <div>
        <h1>Xóa khách hàng</h1>
        <i class="bi bi-x-circle closttb"></i>
    </div>
    <div class="thongbao-title">
        <p>Xóa khách hàng sẽ xóa vĩnh viễn dữ liệu khách hàng. Bạn có chắc chắn muốn xóa?</p>
    </div>
    <div class="submitadd">
        <button id="huyxoa">Hủy Bỏ</button>
        <button id="tieptucxoa">Xóa Khách Hàng</button>
    </div>
</div>
`

var thongbaocapnhap = `
<div class="thongbaocapnhap">
    <div>
        <h1>Bạn chưa lưu cập nhập</h1>
        <i class="bi bi-x-circle closttb"></i>
    </div>
    <div class="thongbao-title">
        <p>Bạn đã thay đổi thông tin cập nhập, bạn có chắc chắn không muốn thay đổi thông tin nữa?</p>
    </div>
    <div class="submitadd">
        <button id="huycapnhap">Hủy Bỏ</button>
        <button id="capnhap">Lưu thông tin</button>
    </div>
</div>
`