import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import ArticleSummary from './ArticleSummary';

const StyledArticleGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`


export class ArticleGrid extends Component {
    render() {
        return (
            <StyledArticleGrid>
                <ArticleSummary 
                    as="large" 
                    title="Sorry We Missed You review: Ken Loach counts the cost of striving in austerity Britain"
                    desc="When a father of two takes a job as a courier, the iniquities of the gig economy push him and his family to breaking point in the latest, considerably accomplished drama from Loach and Paul Laverty."
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    as="small" 
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    as="small" 
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    as="small" 
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    as="small" 
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    as="small" 
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
            </StyledArticleGrid>
        )
    }
}

export default ArticleGrid
