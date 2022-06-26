import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

  


export class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:6,
        category:"general"
    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
    articles=[
        
    ]
    constructor(){
       
        super();

        this.state={
            articles:[],
            loading:false,
            page:1
        }

    }
    async updatenews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f4ab4644ef4c529f3772c9e3d37a53&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        this.setState({loading:true})
        let parseddata=await data.json();
        this.setState({articles:parseddata.articles,totalArticles:parseddata.totalResults,loading:false})
        console.log(parseddata);

    }
    
    async componentDidMount(){
        // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f4ab4644ef4c529f3772c9e3d37a53&page=1&pageSize=${this.props.pagesize}`;
        // let data=await fetch(url);
        // let parseddata=await data.json();
        // this.setState({articles:parseddata.articles,totalArticles:parseddata.totalResults})
        // console.log(parseddata);
        this.updatenews();
    }

    handleprevclick=async()=>{
        // let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f4ab4644ef4c529f3772c9e3d37a53&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parseddata=await data.json()
        // this.setState({
        //     page:this.state.page-1,
        //     articles:parseddata.articles,
        //     loading:false
        // })
        this.setState({ page:this.state.page-1});
        this.updatenews();
    }

    handlenextclick=async()=>{
        // if(this.state.page+1>Math.ceil(this.state.totalResults /20)){}
        // else{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f4ab4644ef4c529f3772c9e3d37a53&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parseddata=await data.json()
        // this.setState({
        //     page:this.state.page+1,
        //     articles:parseddata.articles,
        //     loading:false
        // })}
        this.setState({ page:this.state.page+1});
        this.updatenews();
    }



  render() {
    return (
      <div>
         
        <div className="container my-3 ">
        <div className="text-center">
        <h1>Top Headlines</h1>
        {this.state.loading && <Spinner/>}</div>
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>   
                      <Newsitem title={element.title} description={element.description} iurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
                })}
               <div className="container my-3 d-flex justify-content-between ">
               <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevclick}>Previous</button>
               <button disabled={this.state.page+1>Math.ceil(this.state.totalResults /this.props.pagesize)} type="button" className="btn btn-primary "  onClick={this.handlenextclick}>Next</button>


               </div>
        
            </div>
        </div>
    </div>
      
    )
  }
}

export default News
