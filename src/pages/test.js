import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import { FONT_SIZE, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing"
import { colors } from "../utils/colors"
import Page, { PageContent, PageHeader, PageTitle } from "../components/page"

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
`

const Post = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 5px;
`

const PostTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_6, fontWeight: 600 })};
  color: ${colors.text};
`

const PostSummary = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.Text })};
  margin-bottom: 12px;
  color: ${colors.text};
`
const PostMeta = styled.div`
  display: flex;
  align-items: center;
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
  color: ${colors.textOp2};
`

const Date = styled.div`
  margin-right: 8px;
`

const Author = styled.a`
  margin-right: 8px;
`

const Tags = styled.div``

const Tag = styled.a`
  display: inline-block;
  /* background: #f6f6f6;
  padding: 2px 12px; */
  margin-right: 6px;
  /* border-radius: 9999px;
  text-decoration: none; */
`

const News = () => {
  return (
    <Layout>
      <Seo title="Nyheter" />
      <Page>
        <PageHeader>
          <PageTitle>Nyheter</PageTitle>
        </PageHeader>
        <PageContent>
          <Posts>
            <Post>
              <PostTitle>
                Domestic Violence in California – How a Lawyer Can Help
              </PostTitle>
              <PostSummary>
                I neglect my talents Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in...
              </PostSummary>
              <PostMeta>
                <Date>Feb 28, 2019</Date>
                <Author href="#">Magnus Stray Vyrje</Author>
                <Tags>
                  <Tag href="#">Family</Tag>
                  <Tag href="#">Immigration</Tag>
                </Tags>
              </PostMeta>
            </Post>
            <Post>
              <PostTitle>
                Domestic Violence in California – How a Lawyer Can Help
              </PostTitle>
              <PostSummary>
                I neglect my talents Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in...
              </PostSummary>
              <PostMeta>
                <Date>Feb 28, 2019</Date>
                <Author href="#">Magnus Stray Vyrje</Author>
                <Tags>
                  <Tag href="#">Family</Tag>
                  <Tag href="#">Immigration</Tag>
                </Tags>
              </PostMeta>
            </Post>
          </Posts>
        </PageContent>
      </Page>
    </Layout>
  )
}

export default News
