export const Header = () => {
    return (
        <div className="san"
        style={{  width: "100%",
            height: "70px",
            display: "flex"}}>
            <div className="sta home"
            style={{ width: "50%",
                textAlign: "center",
                fontSize:" 35px",
                fontWeight: "bolder",
                paddingTop: "15px",
                color: "rgb(236, 234, 234)",
                backgroundColor: "black",
                borderTopLeftRadius: "20px",
                borderRight: "solid 1px white"
            }}
               
            >NHÀ</div>
            <div className="sta away"
            style={{
                width: "50%",
                textAlign: "center",
                fontSize:" 35px",
                fontWeight: "bolder",
                paddingTop: "15px",
                color: "rgb(236, 234, 234)",
                backgroundColor: "black",
                borderTopRightRadius: "20px",
                borderLeft: "solid 1px white"
            }}>KHÁCH</div>
        </div>
    )
}
function openChuThich() {
    const a = document.querySelector(`.bang-chu-thich`)
    if(a.classList[a.classList.length-1] == 'showing') {
        a.classList.remove(`showing`)
    }else {a.classList.add(`showing`)}
}
const BtnVeCuoc = (props) => {
    return (
        <div className="vecuoc" onClick={props.func} style={{
            width: "20%",
            height: "100%",
            margin:" 0 40%",
            backgroundColor: "orange",
            paddingTop: "8px",
            textAlign: "center",
        }}>
            <p style={{ width: "100%"}}>Vé Cược</p>
            <h1 id="tongcuoc">0</h1> 
        </div>
    )
}
const cuoc = () => {
    if(document.getElementsByClassName(`inputTien`)){
        let a = document.getElementsByClassName(`inputTien`);
        let b=0;
        for(let i=0;i<a.length;i++) {
            if(a[i].getAttribute(`value`) == "") {b+=1}
        }
        if(b>0){alert(`Nhập đủ số tiền cược`)}
        else{
        html2canvas(document.querySelector("#themvecuoc")).then(canvas => {
            canvas.toBlob(function(blob){
                saveAs(blob, "vecuoc.png")
            })
        });}
    }
    
    
}
const Buttons = () => {
    return (
        <div>
            <div className="btn chu-thich" onClick={openChuThich} > &#9888; Chú thích!</div>
            <div className="btn btnSub"onClick={cuoc}><div id="button">Cược</div></div>
            <div className="btn btnDel"  onClick={()=> {location.reload();}}><div>Bỏ</div></div>
        </div>
    )
}   
const ChuThich = () => {
        return(
            <div className="bang-chu-thich">
            <div className="detail">
                <div onClick={openChuThich}>X</div>
                <p>&nbsp;&nbsp;1. Chọn kèo muốn cược bằng cách BẤM vào số line bên trái hoặc phải của dòng.</p>
                <p>&nbsp;&nbsp;2. Các kèo đã chọn sẽ được thêm vào Vé Cược. BẤM vào nút <span>VéCược</span> bên dưới để mở/đóng vé.</p>
                <p>&nbsp;&nbsp;3. Nhập vào số tiền muốn cược ở mỗi kèo, đơn vị là nghìn đồng.</p>
                <p className="donvi">( 100 = 100.000vnđ )</p>
                <p>&nbsp;&nbsp;4. Sau khi hoàn thành vé cược, BẤM <span>Cược</span> để xác nhận lại và gửi vé.</p>
                <p>&nbsp;&nbsp;5. BẤM <span>Bỏ</span> để xóa hết các kèo trong vé.</p>
            </div>
        </div>
        )
}
export class VeCuoc  extends React.Component {
    constructor(props) {
        super(props);
        this.showVe = this.showVe.bind(this)
    }
    showVe() {
        const btnVe = document.getElementById(`tongcuoc`);
        (!btnVe.classList.length && btnVe.innerHTML != 0)? btnVe.classList.add('show') : btnVe.classList.remove(`show`)
        checkBill()
    }
    render() {
        return (
        <div className="bottom" style={{position: "fixed",
            bottom: "0",
            width: "100%",
            height: "70px",
            backgroundColor: "black",
            transition: "1s"}}>
            
            <BtnVeCuoc  func={this.showVe}/>
            <div className="themvecuoc" id="themvecuoc"></div>
            <Buttons />
            <ChuThich />
        </div>
    )}
}
export function checkBill() {
    const btnVe = document.getElementById(`tongcuoc`);
    btnVe.innerHTML = document.getElementsByClassName(`chon-keo`).length
    const soCuoc = Number(btnVe.innerText)
    console.log(soCuoc)
    let bot = document.querySelector(`.bottom`)
    document.querySelector(`.show`) ?  bot.style.marginBottom =  (soCuoc*50 + "px").toString() : bot.style.marginBottom = "0"
}