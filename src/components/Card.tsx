interface CardProps{
    image:string ,
    name:string,}

export default function Card({image,name}:CardProps) {
  return (
    <div className='h-[300px] border pt-4 rounded shadow flex flex-col items-center'>
        <img src={image} className='h-[180px]  rounded-t-lg' alt=''/>
        <div className='p-4'>
            <h2 className='text-gray-800 text-xl font-bold'>{name}</h2>
        </div>
    </div>
  )
}
