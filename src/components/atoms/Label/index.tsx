const Label = ({ labelFor, labelValue }: { labelFor: string; labelValue: string }) => {
  return <label htmlFor={labelFor}>{labelValue}: </label>;
};

export default Label;
