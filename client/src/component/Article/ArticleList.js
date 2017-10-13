// import React JSX
import React from 'react';
import {ArticleItem} from './ArticleItem';
import {BackBtn} from '../Button';
import {Row} from '../Grid';

export const ArticleList = (props) =>

            <ul>
                {console.log(props.results)}
                  
                {props.results.map(article =>
                        <ArticleItem 
                            headline= {article.headline || article.headline.main}
                            byline= {article.byline || article.byline.original}
                            date= {article.date || article.pub_date}
                            snippet= {article.snippet || article.snippet}
                            url= {article.url || article.web_url}
                            key= {article._id}
                            id= {article._id}
                            thumbnail= { article.thumbnail || article.multimedia[2].url}
                        />
                    )
                }
                <Row><BackBtn handleReturn={props.handleReturn} /></Row>
            </ul>

export default ArticleList;
        
