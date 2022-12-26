interface card {
    image: string,
    btn: string,
    name: string,
    color: string
}

interface propInterface {
    key: number,
    cardtype: card
}

const OrgTypeCard = (props:propInterface) => {
    const {name, image, color, btn} = props.cardtype
  return (
    <div className={`h-full w-60 border rounded-3xl border-${color} overflow-hidden my-auto`}>
        <div className="h-3/4 flex flex-col items-center justify-between py-6">
            <img src={image} className="h-2/3" />
            <span className={`text-${color} font-medium text-lg`}>{name}</span>
        </div>
        <div className={`h-1/4 bg-${color}`}>
            <button type="button" className={`text-gray-900 w-full h-full text-xl`}>{btn}</button>
        </div>
    </div>
  )
}

export default OrgTypeCard