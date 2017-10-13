// import React JSX
import React from 'react';
import './ArticleItem.css';
import {Row,Col} from '../Grid';
import {ArticleBtn, SaveBtn} from '../Button'

// create ArticleItem component
export const ArticleItem = (props) =>
    <div className="card">
        <div className="card-header">
            {props.headline}
        </div>
        
        <div className="card-block">
        <Row>
            <Col size={2}>
                <img style= {{width: '75%'}} src={`https://static01.nyt.com/${props.thumbnail}`} alt='thumbnail'/>
            </Col>
            <Col size={10}>
                <p className="card-text"> {props.byline} </p>
                <p className="card-text">Date {props.date}</p>
                <p className="card-text">{props.snippet}</p>
            </Col>
        </Row>
        <Row>
            <div style={{margin: '0.5rem auto'}}>
                
                <ArticleBtn url={props.url}>Read</ArticleBtn>
                <SaveBtn 
                    type='success' 
                    id={props.id}
                    handleSave={props.handleSave}
                >
                    Save
                </SaveBtn>
            </div>
        </Row>
        </div>
  </div>