import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Cover = styled.div`
  display: flex;
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ detail, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Searching | Recipe Book</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{detail.title} | Recipe Book</title>
      </Helmet>
      <Backdrop bgImage={detail.image} />
      <Content>
        <Cover bgImage={detail.image} />
        <Data>
          <Title>{detail.title}</Title>
          <ItemContainer>
            <Item>{detail.summary.replace(/(<([^>]+)>)/gi, "")}</Item>
            <Divider>
              <br />
            </Divider>
            <Item>
              Ingredients:
              {detail.extendedIngredients &&
                detail.extendedIngredients.map((ingredient, index) =>
                  index === detail.extendedIngredients.length - 1
                    ? ingredient.name
                    : `${ingredient.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{detail.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
