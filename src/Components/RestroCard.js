import { RESTRO_IMGS } from "../Utils/Constance";

const RestroCard = (props) => {
    const {listData} = props;
    const {name,cloudinaryImageId,cuisines,costForTwo,area} = listData
  return (
    <div className="restro-card">
        <div className="img-div">
            <img src= {  RESTRO_IMGS + cloudinaryImageId } alt="" />
        </div>
     <div className="hr"></div>
        <div className="details-div">
            <p> RestroName : {name} </p>
            <p> Cuisines : {cuisines.join(",")} </p>
            <p> CostForTwo : {costForTwo/100} </p>
            <p> Location: {area} </p>
        </div>
    </div>
  )
};

export default RestroCard