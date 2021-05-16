import React from "react"
import {
  Wrapper,
  Container,
  Sidebar,
  ProfileImage,
  Profile,
  ProfileContent,
  ProfileName,
  ProfileType,
  ProfileInfo,
  Content,
} from "./Lawyer.styled"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import en from "../../intl/en.json"

export const Lawyer = ({ data, locale }) => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <Profile>
            {data.profileImage && (
              <ProfileImage>
                <Img fluid={data.profileImage.fluid} />
              </ProfileImage>
            )}
            <ProfileContent>
              <ProfileName as="h1">{data.name}</ProfileName>
              {data.type && (
                <ProfileType>
                  {data.type.map(type => (
                    <span key={type}>{type}</span>
                  ))}
                </ProfileType>
              )}
              {data.phoneNumber ||
                (data.email && (
                  <ProfileInfo>
                    <dt>{locale === "en" ? en.telephone : "Telefon"}:</dt>
                    <dd>
                      <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                    </dd>
                    <dt>{locale === "en" ? en.email : "E-post"}:</dt>
                    <dd>
                      <a href={`mailto:${data.email}`}>{data.email}</a>
                    </dd>
                  </ProfileInfo>
                ))}
            </ProfileContent>
          </Profile>
        </Sidebar>

        <Content>{data.biography && renderRichText(data.biography)}</Content>
      </Container>
    </Wrapper>
  )
}

export default Lawyer
