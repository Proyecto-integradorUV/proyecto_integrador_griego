const ImagenCaoursel = (props) => {
  return (
    <div style={{ maxWidth: "auto", maxHeight: "auto" }}>
      <img
        src={require(`./imagesLec1/${props.imagen}.png`)}
        alt="Imagen"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};
export default ImagenCaoursel;
