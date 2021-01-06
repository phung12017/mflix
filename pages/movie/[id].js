import { useRouter } from 'next/router'
function Details(){
    const router = useRouter()
    const { id } = router.query
    const{casts} = router.query
    console.log(casts);
    return(
    <p>Details: {id} - {casts}</p>
        
    )
}


export default Details