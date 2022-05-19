import  React,{Component} from "react";
import store from './redux/Store';



export default class  Posts extends Component{
    state={
        posts:[]
    }


    componentDidMount(){
        store.subscribe(()=>{
            let data=store.getState()
            this.setState({posts:data.posts})
        })
       
    }
    removeElement=(id)=>{
        store.dispatch({
            type:'DELETE_CARD',
            payload: {
                id: id
            }
        })
    }
    render(){
        return(
            this.state.posts.map((data,index)=>(
                <>
                <h1 key={index}>{data}</h1>
              <button className="delete" onClick={()=>this.removeElement(index)}>X</button>
                </>
                
            ))
        )
    }
}
    
