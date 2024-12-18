const FieldSet = ({ label, children }) => {
  return (
    <fieldset className='m-2 border-none p-0'>
      {label && (
        <legend className='text-lg font-bold mb-2 text-center'>{label}</legend>
      )}
      <div className='fex flex-col justify-between self-start'>{children}</div>
    </fieldset>
  );
};

export default FieldSet;
