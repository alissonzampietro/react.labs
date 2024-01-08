export default function Random({max, min}) {

    let number = (Math.random() * (Number(max) - Number(min)) + Number(min)).toFixed(1);

    return <>
        <p>The generated number is {number}</p>
    </>

}