// import { styled } from "@mui/system";

// export const WraperFooter=styled('div')({
//     width:'1450px',
//     height:'447px',
//     margin:'0 auto',
//     backgroundColor:"#F8F8F8"
// })

// export const ContainerFooter=styled('div')({
//     width:'1140px',
//     padding:'0 160px 0 150px',
//     display:'flex',
//     justifyContent: 'space-between',
// })

// export const TitleFooter=styled('p')({
//     fontFamily: 'Rubik',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     fontSize: '18px',
//     lineHeight: '30px',
//     color: '#0B132A',
//     display:'flex',alignItem:'flex-start',
//     marginBottom: '10px',
// })

// export const ContentFooter=styled('p')({
//     fontFamily: 'Rubik',
//     fontStyle: 'normal',
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '30px',
//     color: '#4F5665',
//     margin:'10px 0 0 0'
// })

export default {
  wrapper: ({ global: { wrapper } }) => ({
    backgroundColor:'red'
  }),

  container: ({ global: { container } }) => ({
    display: "flex",
    justifyContent: "center",
    margin: "180px 150px 100px",
  }),
  halfContainer: () => ({
    width: "50%",
  }),

  containerIntroduce: () => ({
    margin: "20px 0 30px 0",
    display: "flex",
    alignItems: "center",
    maxWidth: "341px !important",
  }),
  introduced1: () => ({
    fontFamily: "Rubik !important",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 30 / 16,
    color: "#4F5665 ",
  }),
  introduced2: () => ({
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "400 ",
    fontSize: "16px",
    lineHeight: 30 / 16,
    color: "#AFB5C0  ",
  }),
  containerMenu: () => ({
    display: "flex",
    justifyContent:'flex-end',
    justifyContent:'space-between',
  }),
  titleMenu: () => ({
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "500 ",
    fontSize: "18px",
    lineHeight: 30 / 18,
    color: "#0B132A",
    marginBottom: "20px",
  }),
  contentMenu: () => ({
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "400 ",
    fontSize: "16px",
    lineHeight: 30 / 16,
    color: "#AFB5C0  ",
    marginBottom: "10px",
  }),
};
