function ComponentInput(props) {

    const handleChange = (e) => {
        props.contentChange(e);
    };

    const alerting = () => {
        alert(props.cont)
    }

    const reset = () => {
        props.setContent1("")
        props.setContent2("")
        props.setContent3("")
        props.setContent4("")
    }

    return (
        <fieldset  style={{
                backgroundColor: props.color
            }}>
            <legend id="title">
                {props.title} 다이얼로그
            </legend>
            <input
                type="text"
                key={props.id}
                value={props.cont}
                placeholder={props.placeholder}
                onChange={handleChange}/> {
                props.id === "1" || props.id === "4"
                    ? <button onClick={alerting}>클릭</button>
                    : null
            }
            <button onClick={reset}>초기화</button>
            <p>
                입력 : {props.cont}
            </p>
        </fieldset>
    )
};

export default ComponentInput;