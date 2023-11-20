async function getData(){
    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = await response.json();
    return data;
}
const page = async() => {
    let data = await getData();
  return (
    <div>
        <h1>This is our Country Page</h1>
        {
            data.map((item, index) => {
                return(
                    <div key={index}>
                        <h3>{item.name.common}</h3>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default page