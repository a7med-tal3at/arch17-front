const initialState = {
    process:'info',
    pojectState:'progress',
    projectData:{
    info:{},
    cover:'',
    designers:[],
    brandes:[],
    content:[],
}
}
// const chProceess = (projectData) =>{
//     if (projectData.cover) {
//         process:'cover'
//     }
//     if (projectData.designers) {
//         process:'cover'
//     }
//     if (projectData.brandes) {
//         process:'cover'
//     }
//     if (projectData.content) {
//         process:'role'
//     }

// }
const projectReducer = (state = initialState , action )=>{
return state;
} 

export default projectReducer;