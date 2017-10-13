// import dependencies
import React,{Component} from 'react';
import '../css/Result.css';
import {Container} from '../component/Grid';
import {ArticleList} from '../component/Article';
import { connect } from 'react-redux';
import API from '../utils/API';

function mapStatetoProps(state){
    return {
        results: state.search.articles
    }
}

// create result component
//--------------------------------------------------------

class Result extends Component {

    handleSave = (id) => {
        let article = this.props.results.filter(article => article._id === id);
        article = article[0];

        let articleInfo = {
            headline: article.headline.main,
            byline: article.byline,
            date: article.pub_date,
            snippet: article.snippet,
            url: article.web_url,
            thumbnail: article.multimedia[2].thumbnail
        }
      
        API.saveArticle(articleInfo)
            .then((article) => console.log(article))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Container>
                {console.log(this.props.results)}
                {this.props.results.length > 0 ? 
                    <ArticleList 
                        results={this.props.results} 
                        handleReturn={this.props.handleReturn}
                        handleSave={this.handleSave}
                    /> 
                        : 
                    "No Result Found"}
            </Container>
        )
    }
}

export default connect(mapStatetoProps)(Result);