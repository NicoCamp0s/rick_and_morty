import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Fafa from "./detail.module.css"

const Detail = () => {

  const dispatch = useDispatch()
  const { detailId } = useParams();
  const charDetail = useSelector(state => state.characterDetail);

  useEffect(() => {
    dispatch(act.getCharacterDetail(detailId))
    return () => {
      dispatch(act.clearDetail())
    }
  }, [detailId])
  
  return (
    <div className={Fafa.detail}>
      {charDetail.name ? (
        <>
          <h2>name: {charDetail.name}</h2>
          <h4>status: {charDetail.status}</h4>
          <h4>species: {charDetail.species}</h4>
          <p>gender: {charDetail.gender}</p>
          <p>origin: {charDetail.origin?.name}</p>
          <img src={charDetail.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;