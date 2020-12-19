import React, { useState, useEffect } from "react";
import CuisinePresenter from "./CuisinePresenter";
import { api } from "../../api";

const CuisineContainer = () => {
  // TODO: change to useReducer to resolve exhaustive-deps:https://www.seangroff.dev/useeffect-state-trap/
  const [state, setState] = useState({
    korean: null,
    american: null,
    mexican: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const getRecipe = async () => {
      const url = "complexSearch";
      const {
        data: { results: korean },
      } = await api.get(url, {
        params: {
          cuisine: "Korean",
          number: 10,
        },
      });

      const {
        data: { results: american },
      } = await api.get(url, {
        params: {
          cuisine: "American",
          number: 10,
        },
      });

      const {
        data: { results: mexican },
      } = await api.get(url, {
        params: {
          cuisine: "Mexican",
          number: 10,
        },
      });

      return { korean, american, mexican };
    };

    try {
      getRecipe().then((response) => {
        const { korean, american, mexican } = response;
        setState({
          ...state,
          korean: korean,
          american: american,
          mexican: mexican,
          loading: false,
        });
      });
    } catch (err) {
      setState({
        ...state,
        error: err.message,
        loading: false,
      });
    }
  }, []);

  const { korean, american, mexican, error, loading } = state;

  return (
    <CuisinePresenter
      korean={korean}
      american={american}
      mexican={mexican}
      error={error}
      loading={loading}
    />
  );
};

export default CuisineContainer;
