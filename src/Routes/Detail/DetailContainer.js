import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { api } from "../../api";

const DetailContainer = (props) => {
  const [state, setState] = useState({
    detail: null,
    error: null,
    loading: true,
  });

  const {
    match: {
      params: { id },
    },
    history: { push },
  } = props;

  useEffect(() => {
    const getDetail = async () => {
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }

      try {
        const { data: detail } = await api.get(`${id}/information`, {
          params: {
            includeNutrition: false,
          },
        });
        setState({ ...state, detail: detail, loading: false });
      } catch {
        setState({
          ...state,
          error: `Cannot search by ${id}`,
        });
      }
    };
    getDetail();
  }, []);

  const { detail, error, loading } = state;
  return <DetailPresenter detail={detail} error={error} loading={loading} />;
};

export default DetailContainer;
