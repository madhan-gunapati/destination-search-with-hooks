const DestinationItem = (props)=><div>
    <img src={props.data.imgUrl} alt='destination ' />
    <p>{props.data.name}</p>
</div>

export default DestinationItem