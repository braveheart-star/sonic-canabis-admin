export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    height: "100%",
    padding: "0 0 0 10px",
    border: 0,
    boxShadow: "none",
  }),
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    paddingLeft: "20px",
    paddingRight: "20px",
    color: !state.isSelected ? "#838eab" : "#fff",
    background: !state.isSelected && "none",
    cursor: "pointer",
  }),
};
