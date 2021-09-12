import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import spinner from "./spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  
  constructor(props) {
    super(props);
    this.articles = [];

    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page:0

    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a4bcefd63c4100bd7dd0f059eb77ee&page=${this.state.page+1}`;

    let data = await fetch(url);
    let parsedata = await data.json();
    
    

    this.setState({
      totalResults: parsedata.totalResults,
      articles: parsedata.articles,
      page:this.state.page +1
        
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1,
                    
    });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a4bcefd63c4100bd7dd0f059eb77ee&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({ articles:this.state.articles.concat(parsedata.articles),
        
    
    } );
    
  };

  render() {
    return (
      <div className="container my-3">
        <h1>Top {this.props.category} headlines </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.parsedata}
          
        >
            <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imgURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://clipground.com/images/picture-not-available-clipart-12.jpg"
                    }
                    url={element.url ? element.url : " "}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
