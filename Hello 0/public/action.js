

class Nut extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:props.count
        };
    }
    add(){
        this.setState({
            count:parseInt(this.state.count)+1
        })
    }
    render(){
        return (<div>
            <button onClick={this.add.bind(this)}className="nutbam">Hello {this.state.count}</button>
        </div>);
    }
}
ReactDOM.render(<Nut count="0" />,document.getElementById("root"));