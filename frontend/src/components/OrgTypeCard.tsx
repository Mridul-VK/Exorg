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
  return (
    <div className={`h-full w-60 border rounded-3xl border-${props.cardtype.color} overflow-hidden my-auto`}>
        <div className="h-3/4 flex flex-col items-center justify-between py-6">
            <img src={props.cardtype.image} className="h-2/3" />
            <span className={`text-${props.cardtype.color} font-medium text-lg`}>{props.cardtype.name}</span>
        </div>
        <div className='h-1/4'>
            <button className={`bg-${props.cardtype.color} text-gray-900 w-full h-full text-xl`}>{props.cardtype.btn}</button>
        </div>
    </div>
  )
}

export default OrgTypeCard