import { Header } from "./components"
import {keo1} from "./keo"
import {keo2} from "./keo"
import {keo3} from "./keo"
import {keo4} from "./keo"
import {keo5} from "./keo"
import {keo6} from "./keo"
import {keo7} from "./keo"
import {VeCuoc} from "./components"
import {checkBill} from "./components"
class Keo extends React.Component {
    constructor(props) {
        super(props);
        this.changeHiep = this.changeHiep.bind(this)
        this.chonKeo = this.chonKeo.bind(this)
    }
    changeHiep(e) {
        const hiep = e.target;
        const cacKeoDau = document.getElementsByClassName(`soi-keo`)
        {( hiep.innerHTML == "Hiệp 1") ?  hiep.innerHTML="Cả trận": hiep.innerHTML="Hiệp 1"}
        for(let i=0;i<cacKeoDau.length;i++) {
            if(hiep == cacKeoDau[i]) {
                let x = (i+1)*2;
                const a = document.getElementsByClassName(`keo-hiep`)[x-1];
                if(a.classList[a.classList.length - 1]=="checking") {a.classList.remove(`checking`)}
                else {a.classList.add('checking')}
            }
        }
    }
    chonKeo(e) {
        if(e.target.classList[e.target.classList.length - 1] == `chon-keo`) {
            e.target.classList.remove('chon-keo')
            this.props.remove(e.target.getAttribute("co"),e.target.getAttribute("value"),e.target.getAttribute("value2"));
        }
        else {
            e.target.classList.add(`chon-keo`)
            this.props.add(e.target.getAttribute("co"),e.target.getAttribute("value"),e.target.getAttribute("value2"));
        }
        
    }
    render () {
        const ds = [
            this.props.keo.chap,
            this.props.keo.chap1,
            this.props.keo.tx,
            this.props.keo.tx1
        ] 
        let danhSachKeo = [,,,]
        for(let i=0; i<2;i++) {
            danhSachKeo[i] = ds[i].map((x) => {
                const home = this.props.keo.home;
                const away = this.props.keo.away; 
                let homeKeo = Number(x[0])
                let awayKeo = Number(x[0]) * (-1)
                if (homeKeo > 0) {homeKeo = `+` + homeKeo.toString() }
                if (awayKeo > 0) {awayKeo = `+` + awayKeo.toString() }
                return (
                    <div className="keo" style={{width:" 100%",
                        height:" 35px",
                        display: "flex",
                        fontSize: "22px",
                        margin: "10px 0",
                        justifyContent: "space-evenly"}}>
                        <div className="lai" value={home+' '+homeKeo} value2={ x[1]} co={x[1]} onClick={this.chonKeo}
                            style={{ width: "80px",
                                border: "solid 2px rgb(148, 143, 143)",
                                borderRadius: "4px",
                                paddingTop: "3px",
                                fontSize: "20px"}}
                        >{x[1]}</div>
                        <div className="keochinh" 
                        style={{  width:" 20%",
                                border: "solid 2px rgb(230, 225, 225)",
                                paddingTop: "2px",
                                fontWeight: "bolder",
                                color: "rgb(179, 71, 8)"}}>
                        {x[0]}</div>
                        <div className="lai"value={away+' '+awayKeo} value2={ x[2]}co={x[2]}onClick={this.chonKeo}
                            style={{ width: "80px",
                            border: "solid 2px rgb(148, 143, 143)",
                            borderRadius: "4px",
                            paddingTop: "3px",
                            fontSize: "20px"}}
                        >{x[2]}</div>
                    </div>
                )
            })
        }
        for(let i=2; i<4;i++) {
            danhSachKeo[i] = ds[i].map((x) => { 
                let keoTai = Number(x[0])
                let keoXiu = Number(x[0])
                return (
                    <div className="keo" style={{width:" 100%",
                    height:" 35px",
                    display: "flex",
                    fontSize: "22px",
                    margin: "10px 0",
                    justifyContent: "space-evenly"}}>
                        <div className="lai" value={"Tài"+' '+keoTai} value2={x[1]}co={x[1]} onClick={this.chonKeo}
                            style={{ width: "80px",
                            border: "solid 2px rgb(148, 143, 143)",
                            borderRadius: "4px",
                            paddingTop: "3px",
                            fontSize: "20px"}}
                        >{x[1]}</div>
                        <div className="keochinh" 
                             style={{  width:" 20%",
                             border: "solid 2px rgb(230, 225, 225)",
                             paddingTop: "2px",
                             fontWeight: "bolder",
                             color: "rgb(179, 71, 8)"}}
                        >{x[0]}</div>
                        <div className="lai"value={"Xỉu"+' '+keoXiu} value2={x[2]}co={x[2]} onClick={this.chonKeo}
                            style={{ width: "80px",
                            border: "solid 2px rgb(148, 143, 143)",
                            borderRadius: "4px",
                            paddingTop: "3px",
                            fontSize: "20px"}}
                        >{x[2]}</div>
                    </div>
                )
            })
        }
        const keoChap = danhSachKeo[0]
        const keoChap1= danhSachKeo[1]
        const keoTx= danhSachKeo[2]
        const keoTx1= danhSachKeo[3]
        
        const CapDau = () => {
            return (
                <div className="battle" style={{
                        display: "flex",
                        height: "50px",
                        backgroundColor: "black",
                        color: "white",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                }}>
                    <div className="team team1" style={{  paddingTop: "9px",width: "42%",fontSize: "22px"}}>{this.props.keo.home}</div>
                    <div className="soi-keo" onClick={this.changeHiep} 
                    style={{width:" 20%",
                        borderBottom: "black",
                        paddingTop: "16px",
                        fontSize: "16px",
                        color: "black",
                        backgroundColor: "rgb(230, 225, 225)",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",}}>
                        Cả trận</div>
                    <div className="team team2" style={{  paddingTop: "9px",width: "42%",fontSize: "22px"}}>{this.props.keo.away}</div>
                </div>
            )
        }
        const TiLeCuoc = () => {
            
            return (
            <div>
                <div className="keo-hiep" style={{position: "absolute",width: "100%",backgroundColor: "rgb(230, 225, 225)"}}>{keoChap1}Tài/Xỉu{keoTx1}</div>
                <div className="keo-hiep" style={{position: "absolute",width: "100%",backgroundColor: "rgb(230, 225, 225)"}}>{keoChap} Tài/Xỉu {keoTx}</div>
            </div>)
        }
        return (
            <div className="match" style={{
                width: "100%",
                height: "300px",
                position:" relative",
                textAlign: "center",
                border: "solid 1px rgb(172, 161, 161)",
                backgroundColor: "rgb(230, 225, 225)",
            
            }}>
                <CapDau />
                <TiLeCuoc  />
            </div>
        )
    }
}
class AddBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sotien: ''}
        this.nhapSoTien = this.nhapSoTien.bind(this)
    }
    nhapSoTien(e) {
        this.setState({sotien: e.target.value })
    }
    render() {
        return (
            <div className="input-tien" style={{ height: "50px",
                display: "flex",
                backgroundColor:" aliceblue",
                textAlign: "center"}}>
                <h3 className="tran" style={{
                        width: "40%",
                        textAlign: "left",
                        paddingTop: "16px",
                        paddingLeft: "8px",
                        fontSize: "16px",
                }}>• {this.props.keo}</h3>
                <h3 style={{
                      width: "20%",
                      paddingTop: "5px",
                      textAlign: "center",
                      paddingTop: "14px",
                }}>{this.props.uoctinh}</h3>
                <div className="nhap-tien" style={{  width: "25%",padding: "9px 0"}}>
                    <input type="text" value={this.state.sotien} onChange={this.nhapSoTien} className="inputTien"
                        style={{ width: "80%",
                                height: "100%",
                                textAlign: "center",
                                fontSize: "140%"}}/>
                </div>
                <p style={{  width:" 15%",
                        paddingTop: "17px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        color: "green",
                        overflow: "hidden"}}
  >{(this.state.sotien*this.props.co).toFixed(0)}</p>
            </div>
        )
    }
}
let danhSachVeCuoc = []

function updateCuoc(a) {
    ReactDOM.render(
        a,document.querySelector(`.themvecuoc`)
    )
    
    checkBill();
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addBet = this.addBet.bind(this)
        this.removeBet = this.removeBet.bind(this)
    }
    removeBet(a,b,c) {

        for(let i=0;i<danhSachVeCuoc.length;i++){

            if(danhSachVeCuoc[i].key == b) {danhSachVeCuoc.splice(i,1)}
        }
        console.log(danhSachVeCuoc)
        let tatCaVe = (<div>{danhSachVeCuoc.map((x) => x)}</div>)
        updateCuoc(tatCaVe)  
    }
    addBet(a,b,c) {
        
        danhSachVeCuoc.push((<AddBill  co={a} keo={b} key={b} uoctinh={c}/>))
        
        let tatCaVe = (<div>{danhSachVeCuoc.map((x) => x)}</div>)
        updateCuoc(tatCaVe)  
    }
    render () {
        return (
            <div>
            <div className="board" 
            style={{width:"80%", 
                    height: "auto",
                    paddingBottom: "80px",
                    margin: "10px 10%"}}>
                <Header />
                <Keo keo={keo1} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo2} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo3} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo4} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo5} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo6} add={this.addBet} remove={this.removeBet}/>
                <Keo keo={keo7} add={this.addBet} remove={this.removeBet}/>
               
            </div>
            <VeCuoc/>
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById(`id`)
)