
import React from 'react';
import { Heading2, Heading5, Heading6, Text } from '../../utils/typography';
import { Wrapper, Container, Sidebar, Menu, MenuItem, Content } from './Article.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"


const Article = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <Heading5>Arbeidsområder</Heading5>
          <Menu>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
            <MenuItem to="/">Brasil</MenuItem>
          </Menu>
        </Sidebar>
        <Content>
          {data.biography && renderRichText(data.biography)}
          <Heading2 as="h1">Immateriellrett</Heading2>
          <Heading6 as="h2">Stray Vyrje har betydelig erfaring med immaterialrett (IPR).</Heading6>
          <Text as="p">Fagansvarlig partner for opphavsrett og designrett, etterliknings­saker etter markedsføringsloven, IKT- og IPR-avtaler (agent, lisens-, forhandler og konfidensialitetsavtaler), er advokat Magnus Stray Vyrje. Advokat Stray Vyrje har gjennom en lang rekke år blitt rangert som en av Norges ledende IPR-advokater.</Text>
          <Text as="p">Fagansvarlig partner for varemerkeregistreringer og saker om varemerkeinngrep, er advokat Marie-Louise (Mimi) Holmstedt.</Text>
          <Text as="p">Fagansvarlig partner for saker som gjelder forskningsetikk, er advokat Bjørn Ludvig Zwilgmeyer.</Text>

          <Heading6 as="h3">Våre eksperter på Immateriellrett</Heading6>
        </Content>
      </Container>


    </Wrapper>
  )
}

export default Article;