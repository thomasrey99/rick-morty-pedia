import Image from "next/image"
import style from "@/ui/styles/components/cardsCharacters/card/Card.module.scss"

const Card = ({id, name, status, gender, location, image, species}) => {
  return (
    <div className={style.cardCont}>
        <div className={style.imageCont}>
            <Image src={image} alt={name} width={230} height={220}/>
        </div>
        <div className={style.infoCont}>
            <div className={style.group}>
                <h2 className={style.name}>{name}</h2>
                <p className={style.status}><div className={style.point} style={{ background: status === "Alive" ? "#55cc44" : status === "Dead" ? "#D63D2E" : "#dedede", width:"10px", height:"10px" }}></div> {status} - {species}</p>
            </div>
            <div className={style.group}>
                <p className={style.subt}>Last known location:</p>
                <h3>{location.name}</h3>
            </div>
        </div>
    </div>
  )
}
export default Card