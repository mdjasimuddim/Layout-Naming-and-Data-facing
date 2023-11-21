async function getData(){
    try{
        let response1 = await fetch('https://restcountries.com/v3.1/all')
        let response2 = await fetch('https://restcountries.com/v3.1/all')
        let response3 = await fetch('https://restcountries.com/v3.1/all')
        let response4 = await fetch('https://restcountries.com/v3.1/all')
        let response5 = await fetch('https://restcountries.com/v3.1/all')

        let data1 = await response1.json();
        let data2 = await response2.json();
        let data3 = await response3.json();
        let data4 = await response4.json();
        let data5 = await response5.json();
        return {data1:data1, data2:data2, data3:data3, data4:data4, data5:data5};
    }
    catch(e){
        throw new Error('Error')
    }
}
const page = async() => {
    let data = await getData();
  return (
    <div>
        <h1>This is our Country Page</h1>
        {
            data['data1'].map((item, index) => {
                return(
                    <div key={index}>
                        <h3>data1 : {item.name.common}</h3>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
        {
            data['data2'].map((item, index) => {
                return(
                    <div key={index}>
                        <h3>data2 : {item.name.common}</h3>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
        {
            data['data3'].map((item, index) => {
                return(
                    <div key={index}>
                        <h3>data3 : {item.name.common}</h3>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
        {
            data.data4.map((item, index) => {
                return(
                    <div key={index}>
                        <h3>data4 : {item.name.common}</h3>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default page