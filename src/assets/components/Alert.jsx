const Alert = ({ mensaje, estado }) => {
  return (
    <div className={`${estado} mt-3 alert`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
