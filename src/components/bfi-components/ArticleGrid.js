import React, { Component } from 'react'
import styled from 'styled-components';
import ArticleSummary from './ArticleSummary';

const StyledArticleGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
        content: "";
        flex: auto;
      }
`


export class ArticleGrid extends Component {
    render() {
        return (
            <StyledArticleGrid>
                {this.props.children}
                {/* <ArticleSummary 
                    size="large" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/sorry-we-missed-you-ken-loach-gig-economy-paul-laverty"
                    title="Sorry We Missed You review: Ken Loach counts the cost of striving in austerity Britain"
                    desc="When a father of two takes a job as a courier, the iniquities of the gig economy push him and his family to breaking point in the latest, considerably accomplished drama from Loach and Paul Laverty."
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    size="small" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/brittany-runs-a-marathon-jillian-bell-paul-downs-colaizzo-running-dramedy-female-trainwreck"
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    size="small" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/brittany-runs-a-marathon-jillian-bell-paul-downs-colaizzo-running-dramedy-female-trainwreck"
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    size="small" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/brittany-runs-a-marathon-jillian-bell-paul-downs-colaizzo-running-dramedy-female-trainwreck"
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    size="small" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/brittany-runs-a-marathon-jillian-bell-paul-downs-colaizzo-running-dramedy-female-trainwreck"
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                />
                <ArticleSummary 
                    size="small" 
                    link="https://www.bfi.org.uk/news-opinion/sight-sound-magazine/reviews-recommendations/brittany-runs-a-marathon-jillian-bell-paul-downs-colaizzo-running-dramedy-female-trainwreck"
                    title="Brittany Runs a Marathon review: Jillian Bell shapes up in a dramedy that goes the distance"
                    date="31.10.19"
                    author="Trevor Johnston"
                /> */}
            </StyledArticleGrid>
        )
    }
}

export default ArticleGrid
