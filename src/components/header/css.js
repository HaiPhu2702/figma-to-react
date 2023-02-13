export default {
  wrapper: ({ global: { wrapper } }) => ({}),

  container: ({ global: { container } }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 150px",
    marginTop: "50px",
    marginBottom: "92px",
  }),
  Menu: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),

  listMenu: () => ({
    fontFamily: "Rubik",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "auto",
    color: "#4F5665",
    marginRight: "40px",
  }),

  containerAuth: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  login: () => ({
    fontFamily: "Rubik",
    width: "54px",
    height: "19px",
    fontWeight: 500,
    lineHeight: "19px",
    fontSize: "16px",
    color: "#0B132A",
    marginLeft: "110px",
    marginRight: "30px",
  }),
  register: () => ({
    fontFamily: "Rubik",
    color: "#F53855 !important",
    border: "1px solid #F53855",
    width: "150px",
    height: "45px",
    borderRadius: "18px",
  }),
};
