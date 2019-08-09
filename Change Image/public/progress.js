
class Change extends React.Component{
constructor(props){
    super(props);
    this.state={
        count:1
    }
}
back(){
    if(this.state.count==1){
        this.state.count=5;
    }
    console.log(this.state.count);
    this.setState({count:this.state.count-1})
}
next(){
    if(this.state.count==4){
        this.state.count=0;
    }
    console.log(this.state.count);
    this.setState({count:this.state.count+1})
}
render(){    
    return (        
    <div className="form">
        <img src={"images/image"+this.state.count+".jpg"} alt=""/>
        <br/>
        <button onClick={this.back.bind(this)}>Back</button>
        <button onClick={this.next.bind(this)}>Next</button>
    </div>
    
        );
    }
}
ReactDOM.render(<Change/>
,document.getElementById("root"));